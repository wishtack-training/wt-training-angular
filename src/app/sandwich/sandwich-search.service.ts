import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Sandwich } from '../cart/sandwich';
import { ApiSandwich } from './sandwich-search/sandwich-search.component';

@Injectable({
    providedIn: 'root'
})
export class SandwichSearch {

    constructor(private _httpClient: HttpClient) {
    }

    search(keywords: string): Observable<Sandwich[]> {

        return this._httpClient.get<ApiSandwich[]>(`https://sandwich.now.sh/sandwiches`, {
            params: {
                q: keywords
            }
        })
            .pipe(
                map(dataList => {
                    return dataList.map(data => new Sandwich({
                        title: data.name,
                        ingredientList: data.ingredientList,
                        price: data.price.amount
                    }));
                })
            );

    }
}
