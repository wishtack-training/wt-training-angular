import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Scavenger } from '@wishtack/rx-scavenger';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Book } from '../book';
import { BookStore } from '../book-store';

@Component({
    selector: 'wt-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnDestroy, OnInit {

    selectedBook: Book = null;

    shouldShowList = false;

    private _scavenger = new Scavenger(this);
    private _transcriptActionMap = new Map([
        ['jour', () => this.shouldShowList = true],
        ['nuit', () => this.shouldShowList = false]
    ]);

    constructor(
        private _bookStore: BookStore,
        private _ngZone: NgZone
    ) {
    }

    get _speechRecognitionTranscript$(): Observable<string> {

        return new Observable(observer => {

            const SpeechRecognition = window['webkitSpeechRecognition'];
            const speechRecognition = new SpeechRecognition();
            speechRecognition.continuous = true;
            speechRecognition.lang = 'fr-FR';
            speechRecognition.onresult = (speechRecognitionEvent) => {

                const {results} = speechRecognitionEvent;

                const {transcript} = results[results.length - 1][0];

                observer.next(transcript.trim());

            };

            speechRecognition.start();

            return () => speechRecognition.abort();

        });

    }

    ngOnInit() {

        this._speechRecognitionTranscript$
            .pipe(
                map(transcript => {
                    return this._transcriptActionMap.get(transcript);
                }),
                filter(action => action != null),
                map(action => () => this._ngZone.run(action)),
                this._scavenger.collect()
            )
            .subscribe(action => action());

    }

    getBookList() {
        return this._bookStore.getBookList();
    }

    addBook(book: Book) {
        this._bookStore.addBook(book);
    }

    replaceBook(book: Book) {
        this._bookStore.replaceBook(this.selectedBook, book);
        this.selectedBook = null;
    }

    removeBook(book: Book) {
        this._bookStore.removeBook(book);
    }

    selectBook(book: Book) {
        this.selectedBook = book;
    }

    ngOnDestroy() {
    }

}
