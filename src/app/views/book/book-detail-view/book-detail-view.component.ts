import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../../book/book';
import { GoogleBookRepository } from '../../../book/google-book-repository.service';

@Component({
    selector: 'wt-book-detail-view',
    templateUrl: './book-detail-view.component.html',
    styleUrls: ['./book-detail-view.component.css']
})
export class BookDetailViewComponent implements OnInit {

    book: Book;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _googleBookRepository: GoogleBookRepository
    ) {
    }

    ngOnInit() {

        const bookId = this._activatedRoute.snapshot.paramMap.get('bookId');

        this._googleBookRepository.getBook(bookId)
            .subscribe(book => this.book = book);

    }

}
