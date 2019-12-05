import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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

  constructor(private _cart: Cart, private _httpClient: HttpClient) {
  }

  ngOnInit() {

    this.keywordsControl.valueChanges.subscribe(keywords => {
      this.search(keywords);
    });

  }

  search(keywords: string) {
    this._httpClient.get<GoogleVolumeListResponse>('https://www.googleapis.com/books/v1/volumes', {
      params: {
        filter: 'paid-ebooks',
        q: keywords
      }
    }).subscribe(data => {
      this.itemList = data.items.map(convertVolumeToItem);
    });
  }

  buyItem(item: Item) {
    this._cart.addItem(item);
  }
}
