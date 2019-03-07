import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Sandwich } from '../sandwich';

@Component({
    selector: 'wt-sandwich-search',
    templateUrl: './sandwich-search.component.html',
    styleUrls: ['./sandwich-search.component.scss']
})
export class SandwichSearchComponent implements OnInit {

    sandwichList: Sandwich[];
    sandwichSearchForm = new FormGroup({
        keywords: new FormControl()
    });

    constructor(
        private _httpClient: HttpClient
    ) {
    }

    ngOnInit() {

        this.sandwichSearchForm.valueChanges
            .subscribe(value => {
                console.log(value);
            });

    }

    search() {
        this._httpClient.get<Partial<Sandwich>[]>('https://api-oowrismgwd.now.sh/sandwiches')
            .subscribe(dataList => {

                this.sandwichList = dataList.map(data => new Sandwich(data));

                // console.log(dataList);
                // console.log(this.sandwichList);


            });

    }

}
