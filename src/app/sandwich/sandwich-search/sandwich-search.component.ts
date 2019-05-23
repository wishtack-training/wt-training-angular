import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { auditTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
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
export class SandwichSearchComponent implements OnInit {

    searchForm = new FormGroup({
        keywords: new FormControl()
    });
    sandwichList: Sandwich[];

    constructor(
        private _sandwichSearch: SandwichSearch
    ) {
    }

    ngOnInit() {

        const keywords$ = this.searchForm.get('keywords').valueChanges
            .pipe(
                map(keywords => keywords.trim()),
                distinctUntilChanged(),
                auditTime(100)
            );

        keywords$
            .pipe(
                switchMap(keywords => this._sandwichSearch.search(keywords))
            )
            .subscribe(sandwichList => this.sandwichList = sandwichList);

    }

}
