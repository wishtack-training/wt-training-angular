import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { removeUndefinedFields } from '../../lib/remove-undefined-fields';
import { Book, createBook } from '../cart/cart';

export enum Order {
  Newest = 'newest',
  Relevance = 'relevance'
}

export enum Language {
  English = 'en',
  French = 'fr'
}

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

  constructor(private _httpClient: HttpClient) {
  }

  ngOnInit() {
    this.searchForm.valueChanges.subscribe(data => {
      console.log(data);
    });
  }

  search() {
    const {keywords} = this.searchForm.value;
    const result$ = this._httpClient.get<VolumeListResponse>(
      'https://www.googleapis.com/books/v1/volumes',
      {
        params: removeUndefinedFields({
          q: keywords
        })
      }
    );

    result$.subscribe(data => {
      this.books = data.items.map(item => {
        return createBook({
          title: item.volumeInfo.title,
          pictureUri: item.volumeInfo.imageLinks?.thumbnail,
          price: item.saleInfo.listPrice?.amount
        });
      });
    });

  }
}
