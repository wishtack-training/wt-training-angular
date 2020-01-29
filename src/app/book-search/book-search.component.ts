import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../cart/cart';
import { BookSearch } from './book-search.service';

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

  constructor(
    private _bookSearch: BookSearch,
    private _httpClient: HttpClient
  ) {
  }

  ngOnInit() {
    this.searchForm.valueChanges.subscribe(data => {
      console.log(data);
    });
  }

  search() {
    const {keywords, language, order} = this.searchForm.value;

    this._bookSearch.search({
      keywords,
      language,
      order
    }).subscribe(books => this.books = books);
  }
}
