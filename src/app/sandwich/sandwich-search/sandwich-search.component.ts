import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { auditTime, distinctUntilChanged, map, onErrorResumeNext, retry, switchMap } from 'rxjs/operators';
import { Sandwich } from '../../cart/sandwich';
import { SandwichSearch } from '../sandwich-search.service';

export interface ApiSandwich {
    name: string;
    price: {
        amount: number,
        currency: string
    };
    ingredientList: string[];
}

@Component({
    selector: 'wt-sandwich-search',
    templateUrl: './sandwich-search.component.html',
    styleUrls: ['./sandwich-search.component.scss']
})
export class SandwichSearchComponent implements OnInit, OnDestroy {

    searchForm = new FormGroup({
        keywords: new FormControl()
    });
    sandwichList: Sandwich[];

    private _sandwichList$: Observable<Sandwich[]>;
    private _subscription: Subscription;

    constructor(
        private _sandwichSearch: SandwichSearch
    ) {

        const keywords$ = this.searchForm.get('keywords').valueChanges
            .pipe(
                map(keywords => keywords.trim()),
                distinctUntilChanged(),
                auditTime(100)
            );

        this._sandwichList$ = keywords$
            .pipe(
                switchMap(keywords => {
                    return this._sandwichSearch.search(keywords)
                        .pipe(
                            retry(3),
                            onErrorResumeNext()
                        );
                })
            );

    }

    ngOnInit() {

        this._subscription = this._sandwichList$
            .subscribe({
                next: sandwichList => this.sandwichList = sandwichList,
                error: err => console.error('🤕')
            });

    }

    ngOnDestroy() {
        /* @todo RxScavenger. */
        this._subscription.unsubscribe();
    }

}
