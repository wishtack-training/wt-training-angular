import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, map, pluck, shareReplay, switchMap } from 'rxjs/operators';
import { AkitaCartService } from '../../../cart/akita-cart.service';
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
  itemList$: Observable<Item[]>;
  error$: Observable<any>;

  constructor(
    private _cart: AkitaCartService,
    private _bookSearchService: BookSearchService
  ) {
  }

  ngOnInit() {
    const keywords$ = this.keywordsControl.valueChanges;

    const result$: Observable<{ error?: any, itemList: Item[] }> = keywords$
      .pipe(
        debounceTime(50),
        switchMap(keywords =>
          this._bookSearchService
            .search(keywords)
            .pipe(catchError(error => of({error, itemList: []})))
        ),
        shareReplay({
          bufferSize: 1,
          refCount: true
        })
      );

    this.itemList$ = result$.pipe(pluck('itemList'));
    this.error$ = result$.pipe(map(result => result.error));

    // .subscribe(({error, itemList}: { error?: any; itemList: Item[] }) => {
    //     this.error = error;
    //     this.itemList = itemList;
    //   });
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
