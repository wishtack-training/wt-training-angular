import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Sandwich } from '../../cart/sandwich';

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
export class SandwichSearchComponent {

    searchForm = new FormGroup({
        keywords: new FormControl()
    });
    sandwichList: Sandwich[];

    constructor(private _httpClient: HttpClient) {
    }

    search() {

        const keywords = this.searchForm.value.keywords;

        this._httpClient.get<ApiSandwich[]>(`https://sandwich.now.sh/sandwiches`, {
            params: {
                q: keywords
            }
        })
            .subscribe(dataList => {

                this.sandwichList = dataList.map(data => new Sandwich({
                    title: data.name,
                    ingredientList: data.ingredientList,
                    price: data.price.amount
                }));

            });

    }
}
