import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {

  constructor(private _httpClient: HttpClient) {
  }

  search(keywords: string): Observable<{ totalCount: number, itemList: Item[] }> {
    return this._httpClient.get<GoogleVolumeListResponse>('https://www.googleapis.com/books/v1/volumes', {
      params: {
        filter: 'paid-ebooks',
        q: keywords
      }
    }).pipe(
      map((data) => {
        const itemList = data.items.map(convertVolumeToItem);
        return {
          totalCount: data.totalItems,
          itemList
        };
      })
    );
  }
}
