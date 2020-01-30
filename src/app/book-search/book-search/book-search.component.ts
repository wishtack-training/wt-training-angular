import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, onErrorResumeNext, pluck, scan, switchMap } from 'rxjs/operators';
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

export const slide = (windowSize: number) =>
  scan((history, query) => [...history, query].slice(-windowSize), []);

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
  history: BookQuery[];

  constructor(
    private _bookSearch: BookSearch,
    private _httpClient: HttpClient
  ) {
  }

  ngOnInit() {
    const query$: Observable<BookQuery> = this.searchForm.valueChanges.pipe(
      debounceTime(50),
      distinctUntilChanged((a, b) => {
        return (
          a.keywords === b.keywords &&
          a.language === b.language &&
          a.order === b.order
        );
      })
    );

    const result$ = query$.pipe(
      switchMap(query => {
        return this._bookSearch.search(query).pipe(
          map(books => ({
            books,
            query
          })),
          onErrorResumeNext()
        );
      })
    );

    const books$ = result$.pipe(pluck('books'));

    const successfulQuery$ = result$.pipe(pluck('query'));

    successfulQuery$
      .pipe(slide(10))
      .subscribe(history => (this.history = history));

    books$.subscribe(books => (this.books = books));
  }

  search(query: BookQuery) {
    this.searchForm.patchValue(query);
  }
}
