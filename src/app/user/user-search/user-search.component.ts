import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { User } from '../user';

@Component({
    selector: 'wt-user-search',
    templateUrl: './user-search.component.html',
    styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

    userNameControl = new FormControl();
    userList: User[];

    constructor(private _httpClient: HttpClient) {
    }

    ngOnInit() {

        this.userNameControl.valueChanges
            .pipe(
                debounceTime(100)
            )
            .subscribe(value => {
                console.log(value);
            });

        this._httpClient.get('http://wt-users.getsandbox.com/users?firstName=foo')
            .subscribe(data => {
                // @TODO: do the magic stuff... to set userList
                console.log(data);

                this.userList = [
                    new User({
                        firstName: 'Foo'
                    })
                ];
            });

    }

}
