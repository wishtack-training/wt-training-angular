import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { interval, merge, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, map, scan, switchMap, withLatestFrom } from 'rxjs/operators';
import { BookSearchService } from '../../book-search/book-search.service';
import { Book, Cart } from '../../cart/cart';

export enum Language {
  En = 'en',
  Fr = 'fr'
}

export enum OrderBy {
  Newest = 'newest',
  Relevance = 'relevance'
}

@Component({
  selector: 'ag-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  Language = Language;
  OrderBy = OrderBy;

  books: Book[];

  searchForm = new FormGroup({
    keywords: new FormControl(null, [Validators.required]),
    language: new FormControl(Language.En),
    orderBy: new FormControl(OrderBy.Relevance)
  });

  books$: Observable<Book[]>;

  private _searchTrigger$ = new Subject();
  isDisplayed = true;

  constructor(
    private _bookSearchService: BookSearchService,
    private _cart: Cart
  ) {
  }

  ngOnInit() {
    // const searchCriteria$ = this.searchForm.valueChanges
    //   .pipe(
    //     debounceTime(100)
    //   );

    const controls = Object.entries(this.searchForm.controls).map(
      ([name, control]) => ({
        name,
        control
      })
    );

    const sources = controls.map(({name, control}) => {
      return control.valueChanges.pipe(
        map(value => {
          return {
            name,
            value
          };
        })
      );
    });

    const changes$ = merge(...sources);

    const cumulatedChanges$ = changes$.pipe(
      scan((acc, change) => {
        return {
          ...acc,
          [change.name]: change.value
        };
      }, {})
    );

    const searchCriteria$ = merge(this._searchTrigger$, interval(1000)).pipe(
      map(() => this.searchForm.value),
      distinctUntilChanged()
    );

    this.books$ = searchCriteria$.pipe(
      switchMap(value => this._bookSearchService.search(value))
    );

    this._searchTrigger$
      .pipe(withLatestFrom(cumulatedChanges$))
      .subscribe(x => console.log(x[1]));
  }

  search() {
    this._searchTrigger$.next();
  }

  buy(book: Book) {
    this._cart.addBook(book);
  }
}
