import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs/observable/from';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'wt-user-form-reactive',
    templateUrl: './user-form-reactive.component.html',
    styleUrls: ['./user-form-reactive.component.css']
})
export class UserFormReactiveComponent {

    @Output() onUserSubmit = new EventEmitter<User>();

    userForm = new FormGroup({
        firstName: new FormControl(null, [
            Validators.required
        ]),
        lastName: new FormControl(null, [
            Validators.minLength(3)
        ])
    });

    userList$: Observable<User[]>;
    firstName$: Observable<string>;

    constructor(private _httpClient: HttpClient) {

        this.firstName$ = this.userForm.valueChanges
            .debounceTime(200)
            .map(user => user.firstName)
            .filter(firstName => firstName !== 'Younes');

        this.userList$ = this.firstName$
            .switchMap(firstName => {

                return this._httpClient.get<any[]>(`http://wt-users.getsandbox.com/users?firstName=${firstName}`)
                    .map(dataList => dataList.map(data => new User(data)))
                    .retry(3)
                    .catch(() => {
                        console.log(`Bad Bad API! 💩`);
                        return from([]);
                    });

            })
            .shareReplay(1);

    }

    // getFilteredUserList(color) {
    //     return this.userList$
    //         .filter(userList => ...);
    // }

    addUser() {

        const user = new User(this.userForm.value);

        this.onUserSubmit.emit(user);


    }

    getControlList() {
        return Object.values(this.userForm.controls);
    }

}
