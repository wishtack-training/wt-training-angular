import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { User } from '../user';


export const isNot = (forbiddenValue: string) => (control: AbstractControl) => {

    const value: string = control.value;

    if (value == null) {
        return null;
    }

    if (value.length === 0) {
        return null;
    }

    if (value.toLowerCase() === forbiddenValue.toLowerCase()) {
        return {
            'isnotyounes': {
                reason: 'I hate this name!'
            }
        };
    }

    return null;

};

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
            Validators.minLength(3),
            Validators.maxLength(5),
            isNot('Younes')
        ]),
        lastName: new FormControl(null, [

        ])
    });

    submitUser() {

        const user = new User(this.userForm.value);

        this.userSubmit.emit(user);

        this.userForm.reset();

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
