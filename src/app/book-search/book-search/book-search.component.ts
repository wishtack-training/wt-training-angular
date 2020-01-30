import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, onErrorResumeNext, switchMap } from 'rxjs/operators';
import { Book } from '../../cart/cart';
import { BookQuery, Language, Order } from '../book-query';
import { BookSearch } from '../book-search.service';

export interface VolumeItem {
  id: string;
  saleInfo: {
    listPrice: {
      amount: number;
      currencyCode: string;
    };
  };
  volumeInfo: {
    imageLinks: {
      thumbnail: string;
    };
    title: string;
  };
}

export interface GoogleListResponse<TItem> {
  totalItems: number;
  items: TItem[];
}

export type VolumeListResponse = GoogleListResponse<VolumeItem>;

@Component({
  selector: 'mc-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  Order = Order;
  Language = Language;

  searchForm = new FormGroup({
    keywords: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ]),
    language: new FormControl(Language.English),
    order: new FormControl(Order.Newest)
  });

  books: Book[] = [];

  constructor(
    private _bookSearch: BookSearch,
    private _httpClient: HttpClient
  ) {
  }

  ngOnInit() {
    const formValue$: Observable<BookQuery> = this.searchForm.valueChanges;

    const books$ = formValue$.pipe(
      debounceTime(100),
      distinctUntilChanged((a, b) => {
        return (
          a.keywords === b.keywords &&
          a.language === b.language &&
          a.order === b.order
        );
      }),
      switchMap(({keywords, language, order}) => {
        return this._bookSearch.search({keywords, language, order})
          .pipe(onErrorResumeNext());
      })
    );

    books$.subscribe(books => (this.books = books));
  }

  search(bookQuery: BookQuery) {
    this.searchForm.patchValue(bookQuery);
  }

}
