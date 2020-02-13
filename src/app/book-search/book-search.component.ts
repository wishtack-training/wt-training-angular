import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../cart/cart';

export enum Language {
  En = 'en',
  Fr = 'fr'
}

export enum OrderBy {
  Newest = 'newest',
  Relevance = 'relevance'
}

export interface SearchCriteria {
  keywords: string;
  language: Language;
  orderBy: OrderBy;
}

export interface VolumeItem {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    imageLinks: {
      thumbnail: string;
    };
  };
  saleInfo: {
    retailPrice?: {
      amount: number;
      currencyCode: string;
    };
  };
}

export interface VolumeListResponse {
  totalItems: number;
  items: VolumeItem[];
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

  constructor(private _httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  search() {
    this.books = null;

    this._search(this.searchForm.value).subscribe(books => {
      this.books = books;
    });
  }

  private _search(searchCriteria: SearchCriteria): Observable<Book[]> {
    const {keywords, language, orderBy} = searchCriteria;

    return this._httpClient
      .get<VolumeListResponse>('https://www.googleapis.com/books/v1/volumes', {
        params: {
          q: `title:${keywords}`,
          langRestrict: language,
          orderBy
        }
      })
      .pipe(
        map(data => {
          return data.items.map(item => {
            return {
              title: item.volumeInfo.title,
              pictureUri: item.volumeInfo.imageLinks?.thumbnail,
              price: item.saleInfo.retailPrice?.amount
            };
          });
        })
      );
  }
}
