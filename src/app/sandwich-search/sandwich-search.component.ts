import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, map, retry, shareReplay, switchMap } from 'rxjs/operators';
import { Cart } from '../cart/cart';
import { Sandwich } from '../cart/sandwich';

export interface ApiSandwich {
    id: string;
    name: string;
    price: {
        amount: number;
    };
}

@Component({
    selector: 'wt-sandwich-search',
    templateUrl: './sandwich-search.component.html',
    styleUrls: ['./sandwich-search.component.scss']
})
export class SandwichSearchComponent implements OnInit {

    keywordsControl = new FormControl();

    sandwichList: Sandwich[];

    constructor(
        private _cart: Cart,
        private _httpClient: HttpClient
    ) {
    }

    ngOnInit() {

        this.keywordsControl.valueChanges
            .pipe(
                // debounceTime(100)
                switchMap(keywords => this._searchSandwiches(keywords)
                    .pipe(
                        retry(3),
                        catchError(() => of([]))
                    )),
                shareReplay({
                    bufferSize: 1,
                    refCount: true
                })
            )
            .subscribe(sandwichList => this.sandwichList = sandwichList);

        this.keywordsControl.setValue('Le');

    }

    private _searchSandwiches(keywords): Observable<Sandwich[]> {
        return this._httpClient
            .get<ApiSandwich[]>(`https://sandwich.now.sh/sandwiches`, {
                params: {
                    q: keywords
                }
            })
            .pipe(
                map(itemList => {
                    return itemList
                        .map(item => new Sandwich({title: item.name, price: item.price.amount}));
                })
            );
    }

    private async _tryLoadSandwiches() {

        const data$ = this._httpClient.get(`https://sandwich.now.sh/sandwiches`);

        try {
            return await data$.toPromise();
        } catch (e) {
            console.error(e);
        }

    }

    buy(sandwich: Sandwich) {
        this._cart.addSandwich(sandwich);
    }
}
