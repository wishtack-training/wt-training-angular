import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Sandwich } from '../cart/sandwich';

export interface ApiSandwich {
  name: string;
  price: {
    amount: number
    currency: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class SandwichSearch {

  constructor(private _httpClient: HttpClient) {
  }

  searchSandwiches(keywords: string): Observable<Sandwich[]> {

    const params = keywords != null ? {q: keywords} : {};

    return this._httpClient.get<ApiSandwich[]>('https://sandwich.now.sh/sandwiches', {
      params
    })
      .pipe(
        map(itemList => itemList.map(item => new Sandwich({
          title: item.name,
          price: item.price.amount
        })))
      );
  }

}
