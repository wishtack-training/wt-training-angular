import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserRepository } from '../user-repository';

@Component({
    selector: 'wt-user-search',
    templateUrl: './user-search.component.html',
    styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

    constructor(private _httpClient: HttpClient) {
    }

    ngOnInit() {

        console.log(this._httpClient.get('http://wt-users.getsandbox.com/users?firstName=john'));

    }

}
