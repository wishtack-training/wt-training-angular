import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
    selector: 'wt-user-form-reactive',
    templateUrl: './user-form-reactive.component.html',
    styleUrls: ['./user-form-reactive.component.css']
})
export class UserFormReactiveComponent {

    @Output() onUserSubmit = new EventEmitter<User>();

    userForm: FormGroup;

    constructor() {

        this.userForm = new FormGroup({
            firstName: new FormControl(
                null,
                [
                    Validators.required
                ]
            ),
            lastName: new FormControl()
        });

    }

    addUser() {

        const user = new User(this.userForm.value);

        this.onUserSubmit.emit(user);

        this.userForm.reset();

    }

}
