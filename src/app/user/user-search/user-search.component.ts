import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, startWith, switchMap } from 'rxjs/operators';
import { User } from '../user';
import { UserRepository } from '../user-repository';

@Component({
    selector: 'wt-user-search',
    templateUrl: './user-search.component.html',
    styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

    keywordsControl = new FormControl();

    displayed = false;
    userList$: Observable<User[]>;

    constructor(private _userRepository: UserRepository) {
    }

    ngOnInit() {

        this.keywordsControl.setValue('Foo');

        this.userList$ = this.keywordsControl.valueChanges
            .pipe(
                debounceTime(100),
                startWith(this.keywordsControl.value),
                switchMap(keywords => {
                    return this._userRepository.searchUsers(keywords);
                })
            );
    }

}
