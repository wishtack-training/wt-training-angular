import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { User } from '../user';

const isCobolCompatible: ValidatorFn = (control) => {

    const maxLength = 8;
    let { firstName, lastName } = control.value;

    /* @todo hire a new developer. */
    firstName = firstName || '';
    lastName = lastName || '';

    const totalLength = firstName.length + lastName.length;

    if (totalLength > maxLength) {
        return {
            isCobolCompatible: {
                maxLength,
                totalLength
            }
        };
    }

    return null;
};

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
        },
            [
                isCobolCompatible
            ]);

    }

    addUser() {

        const user = new User(this.userForm.value);

        this.onUserSubmit.emit(user);

        this.userForm.reset();

    }

}
