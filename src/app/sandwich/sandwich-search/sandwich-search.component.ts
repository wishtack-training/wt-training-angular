import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'wt-sandwich-search',
    templateUrl: './sandwich-search.component.html',
    styleUrls: ['./sandwich-search.component.scss']
})
export class SandwichSearchComponent implements OnInit {

    constructor(private _httpClient: HttpClient) {
    }

    ngOnInit() {

        const response$ = this._httpClient.get('https://sandwich.now.sh/sandwiches');

        response$
            .subscribe(data => console.log(data));

    }

}
