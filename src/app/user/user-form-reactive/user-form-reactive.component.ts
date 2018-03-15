import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
    selector: 'wt-user-form-reactive',
    templateUrl: './user-form-reactive.component.html',
    styleUrls: ['./user-form-reactive.component.scss']
})
export class UserFormReactiveComponent {

    @Output() userSubmit = new EventEmitter<User>();

    userForm = new FormGroup({
        firstName: new FormControl(null, [
            Validators.required,
            Validators.minLength(3)
        ]),
        lastName: new FormControl(null, [

        ])
    });

    submitUser() {

        const user = new User(this.userForm.value);

        this.userSubmit.emit(user);

    }

    shouldShowFirstNameRequiredError() {

        const firstNameControl = this.userForm.controls['firstName'];

        if (!firstNameControl.touched) {
            return false;
        }

        if (firstNameControl.valid) {
            return false;
        }

        if (!firstNameControl.errors.required) {
            return false;
        }

        return true;

    }
}
