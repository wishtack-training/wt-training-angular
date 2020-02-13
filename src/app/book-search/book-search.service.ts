import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../cart/cart';
import { Language, OrderBy } from '../pages/book-search/book-search.component';


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

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {

  constructor(private _httpClient: HttpClient) {
  }

  search(searchCriteria: SearchCriteria): Observable<Book[]> {
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

          if (data.items == null) {
            return null;
          }

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
