import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, map, pluck, retry, shareReplay, switchMap } from 'rxjs/operators';
import { CartService } from '../cart/cart.service';
import { Sandwich } from '../legacy-cart/sandwich';

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
        private _cart: CartService,
        private _httpClient: HttpClient,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
    }

    ngOnInit() {

        const keywords$ = this.keywordsControl.valueChanges;

        keywords$
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

        keywords$
            .pipe(
                debounceTime(300)
            )
            .subscribe(keywords => {
                this._router.navigate(['/search'], {
                    queryParams: {
                        keywords
                    }
                });
            });

        this._route.queryParams.pipe(pluck('keywords'))
            .subscribe(keywords => this.keywordsControl.setValue(keywords));

        const initialKeywords = this._route.snapshot.queryParamMap.get('keywords');
        if (!initialKeywords) {
            this.keywordsControl.setValue('Le');
        }

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
                        .map(item => new Sandwich({id: item.id, title: item.name, price: item.price.amount}));
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
