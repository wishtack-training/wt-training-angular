import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { removeUndefinedFields } from '../../lib/remove-undefined-fields';
import { Book, createBook } from '../cart/cart';
import { VolumeListResponse } from './book-search.component';

@Injectable({
  providedIn: 'root'
})
export class BookSearch {

  constructor(private _httpClient: HttpClient) {
  }

  search({keywords, language, order}: { keywords: string; language: string; order: string }): Observable<Book[]> {

    return this._httpClient.get<VolumeListResponse>(
      'https://www.googleapis.com/books/v1/volumes',
      {
        params: removeUndefinedFields({
          q: keywords,
          langRestrict: language,
          orderBy: order
        })
      }
    )
      .pipe(
        map(response => {
          return response.items.map(item => {
            return createBook({
              title: item.volumeInfo.title,
              pictureUri: item.volumeInfo.imageLinks?.thumbnail,
              price: item.saleInfo.listPrice?.amount
            });
          });
        })
      );

  }
}
