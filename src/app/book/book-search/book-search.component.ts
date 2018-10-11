import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Scavenger } from '@wishtack/rx-scavenger';
import { debounceTime, switchMap } from 'rxjs/operators';
import { SpeechRecognizer } from '../../speech-recognition/speech-recognizer';
import { Book } from '../book';
import { GoogleBookRepository } from '../google-book-repository.service';

@Component({
    selector: 'wt-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnDestroy, OnInit {

    bookList: Book[];
    keywordsControl = new FormControl();
    isAlive = false;

    private _scavenger = new Scavenger(this);
    private _transcriptActionResolverList = [
        {
            matcher: transcript => transcript === 'hello',
            action: () => this.isAlive = true
        },
        {
            matcher: transcript => ['bye', 'goodbye'].includes(transcript),
            action: () => this.isAlive = false
        },
        {
            matcher: transcript => transcript.startsWith('search '),
            action: transcript => this._applyKeywords(transcript.replace('search ', ''))
        }
    ];

    constructor(
        private _googleBookRepository: GoogleBookRepository,
        private _speechRecognizer: SpeechRecognizer
    ) {
    }

    ngOnInit() {

        this._speechRecognizer.getTranscript()
            .pipe(
                this._scavenger.collect()
            )
            .subscribe(transcript => {
                console.log(transcript);
                this._executeAction(transcript);
            });

        this.keywordsControl.valueChanges
            .pipe(
                debounceTime(200),
                switchMap((keywords) => {
                    return this._googleBookRepository.searchBooks(keywords);
                })
            )
            .subscribe(bookList => {
                this.bookList = bookList;
            });

    }

    ngOnDestroy() {
    }

    private _executeAction(transcript: string) {

        const resolver = this._transcriptActionResolverList.find(_resolver => {
            return _resolver.matcher(transcript);
        });

        if (resolver == null) {
            return;
        }

        resolver.action(transcript);

    }

    private _applyKeywords(keywords: string) {
        this.keywordsControl.setValue(keywords);
    }

}
