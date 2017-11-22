import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from '../user';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'wt-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnChanges {

    @Input() buttonLabel = 'ADD';
    @Input() user: User;
    @Output() onUserSubmit = new EventEmitter<User>();

    userForm: FormGroup;

    constructor(private _httpClient: HttpClient) {

        this.userForm = new FormGroup({
            firstName: new FormControl(null, [
                Validators.required,
                Validators.maxLength(10),
                // startsWithWt
            ]),
            lastName: new FormControl()
        });

    }

    ngOnInit() {
        // this.userForm.valueChanges
        //     .debounceTime(300)
        //     .map(data => new User(data))
        //     .switchMap(user => {
        //         return this._httpClient
        //             .get(`https://wt-users.getsandbox.com/users/0?firstName=${encodeURIComponent(user.firstName)}`);
        //     })
        //     .subscribe(value => console.log(value));
    }

    ngOnChanges(changes: SimpleChanges) {

        if (changes.user != null) {
            this.userForm.reset(this.user);
        }

    }

    addUser() {
        const user = new User(this.userForm.value);
        this.onUserSubmit.emit(user);
        this.userForm.reset();
    }

}
