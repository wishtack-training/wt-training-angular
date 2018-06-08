import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Book } from '../../../book/book';
import { BookRepository } from '../../../book/book-repository';

@Component({
    selector: 'wt-book-detail-view',
    templateUrl: './book-detail-view.component.html',
    styleUrls: ['./book-detail-view.component.css']
})
export class BookDetailViewComponent implements OnInit {

    book$: Observable<Book>;

    constructor(private _bookRepository: BookRepository,
                private _route: ActivatedRoute) {
    }

    ngOnInit() {
        const bookId = this._route.snapshot.paramMap.get('bookId');
        this.book$ = this._bookRepository.getBook(bookId);
    }

}
