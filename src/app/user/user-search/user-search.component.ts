import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map, startWith, switchMap } from 'rxjs/operators';
import { User, UserSchema } from '../user';
import { UserRepository } from '../user-repository';

@Component({
    selector: 'wt-user-search',
    templateUrl: './user-search.component.html',
    styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

    userNameControl = new FormControl();
    userList$: Observable<User[]>;
    isDisplayed = true;

    constructor(private _userRepository: UserRepository) {
    }

    ngOnInit() {

        this.userNameControl.setValue('Foo');

        this.userList$ = this.userNameControl.valueChanges
            .pipe(
                debounceTime(100),
                startWith(this.userNameControl.value),
                switchMap(keywords => {
                    return this._userRepository.searchUsers(keywords);
                })
            );

    }

}
