import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { catchError, debounceTime, switchMap } from 'rxjs/operators';
import { Cart } from '../../../cart/cart.service';
import { Item } from '../../../item/item';
import { ItemModule } from '../../../item/item/item.component';
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

  constructor(
    private _cart: Cart,
    private _bookSearchService: BookSearchService
  ) {
  }

  ngOnInit() {
    const keywords$ = this.keywordsControl.valueChanges;

    keywords$
      .pipe(
        debounceTime(50),
        switchMap(keywords =>
          this._bookSearchService
            .search(keywords)
            .pipe(catchError(() => of({error: true, itemList: []})))
        )
      )
      .subscribe({
        next: ({error, itemList}: { error?: any; itemList: Item[] }) => {
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

@NgModule({
  declarations: [BookSearchComponent],
  exports: [BookSearchComponent],
  imports: [CommonModule, ItemModule, ReactiveFormsModule]
})
export class BookSearchModule {
}
