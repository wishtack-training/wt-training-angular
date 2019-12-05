import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of } from 'rxjs';
import { catchError, debounceTime, switchMap } from 'rxjs/operators';
import { Cart } from '../cart/cart';
import { Item } from '../cart/item';
import { BookSearchService } from './book-search.service';

@Component({
  selector: 'as-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  keywordsControl = new FormControl();
  itemList: Item[];
  error;

  constructor(private _cart: Cart, private _bookSearchService: BookSearchService) {
  }

  ngOnInit() {

    const keywords$ = this.keywordsControl.valueChanges;

    keywords$.pipe(
      debounceTime(50),
      switchMap(keywords => this._bookSearchService.search(keywords)
        .pipe(catchError(() => of({error: true, itemList: []})))),
    )
      .subscribe({
        next: ({error, itemList}: { error?: any, itemList: Item[] }) => {
          this.error = error;
          this.itemList = itemList;
        },
        error: err => console.error('FAIL!'),
        complete: () => console.log('DONE!')
      });

  }

  buyItem(item: Item) {
    this._cart.addItem(item);
  }

  retry() {
    this.keywordsControl.setValue(this.keywordsControl.value);
  }

}
