import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map, onErrorResumeNext, retry, switchMap } from 'rxjs/operators';
import { Sandwich } from '../sandwich';

interface SandwichSearchParams {
    keywords: string;
    maxPrice: number;
}

@Component({
    selector: 'wt-sandwich-search',
    templateUrl: './sandwich-search.component.html',
    styleUrls: ['./sandwich-search.component.scss']
})
export class SandwichSearchComponent implements OnInit {

    sandwichList: Sandwich[];
    sandwichSearchForm = new FormGroup({
        keywords: new FormControl(),
        maxPrice: new FormControl()
    });

    constructor(
        private _httpClient: HttpClient
    ) {
    }

    ngOnInit() {

        const params$: Observable<SandwichSearchParams> = this.sandwichSearchForm.valueChanges;

        const sandwichList$ = params$
            .pipe(
                debounceTime(100),
                switchMap(params => {
                    return this.search(params)
                        .pipe(
                            retry(3),
                            onErrorResumeNext()
                        );
                })
            );

        sandwichList$
            .subscribe({
                next: sandwichList => this.sandwichList = sandwichList,
                error: err => console.error(err),
                complete: () => console.log('DONE')
            });

        this.sandwichSearchForm.setValue({
            keywords: null,
            maxPrice: 10
        });

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
