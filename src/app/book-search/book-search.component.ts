import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { Cart } from '../cart/cart';
import { createItem, Item } from '../cart/item';

export enum Saleability {
  ForSale = 'FOR_SALE',
  NotForSale = 'NOT_FOR_SALE',
}

export interface GoogleVolumeListResponse {
  totalItems: number;
  items: Array<{
    volumeInfo: {
      title: string
    },
    saleInfo: {
      saleability: Saleability,
      listPrice?: {
        amount: number
      }
    }
  }>;
}


const handleError = error => {
  console.error(`Something went wrong but I don't know how to handle it`);
};

export const convertVolumeToItem = gItem => {

  const price = gItem.saleInfo.listPrice != null ? gItem.saleInfo.listPrice.amount : null;

  return createItem({
    title: gItem.volumeInfo.title,
    price
  });
};

@Component({
  selector: 'as-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  keywordsControl = new FormControl();
  itemList: Item[];
  private _subscription: Subscription;

  constructor(private _cart: Cart, private _httpClient: HttpClient) {
  }

  ngOnInit() {

    const keywords$ = this.keywordsControl.valueChanges;

    keywords$.pipe(
      debounceTime(50),
      switchMap(keywords => {
        return this._httpClient.get<GoogleVolumeListResponse>('https://www.googleapis.com/books/v1/volumes', {
          params: {
            filter: 'paid-ebooks',
            q: keywords
          }
        });
      }),
      map((data) => {
        const itemList = data.items.map(convertVolumeToItem);
        return {
          totalCount: data.totalItems,
          itemList
        };
      })
    )
      .subscribe(({itemList}) => this.itemList = itemList);


  }

  search(keywords: string) {

    const data$ = this._httpClient.get<GoogleVolumeListResponse>('https://www.googleapis.com/books/v1/volumes', {
      params: {
        filter: 'paid-ebooks',
        q: keywords
      }
    });

    if (this._subscription != null) {
      this._subscription.unsubscribe();
    }


    this._subscription = data$.subscribe(data => {
      this.itemList = data.items.map(convertVolumeToItem);
    });

  }

  buyItem(item: Item) {
    this._cart.addItem(item);
  }
}
