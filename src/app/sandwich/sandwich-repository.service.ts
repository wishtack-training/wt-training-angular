import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Sandwich } from './sandwich';

export interface SandwichSearchParams {
    keywords: string;
    maxPrice: number;
}

@Injectable({
    providedIn: 'root'
})
export class SandwichRepository {

    constructor(private _httpClient: HttpClient) {
    }

    search(params: SandwichSearchParams): Observable<Sandwich[]> {

        const {keywords, maxPrice} = params;

        const queryParams: any = {};


        if (maxPrice != null) {
            queryParams['price.amount_lte'] = maxPrice.toString();
        }

        if (keywords != null) {
            queryParams.q = keywords;
        }

        return this._httpClient.get<Partial<Sandwich>[]>('https://api-oowrismgwd.now.sh/sandwiches', {
            params: queryParams
        })
            .pipe(
                map(dataList => {
                    return dataList.map(data => new Sandwich(data));
                })
            );

    }
}
