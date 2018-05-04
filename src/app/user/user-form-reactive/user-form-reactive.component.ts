import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { User } from '../user';

const isNotABadGuy: ValidatorFn = (control) => {

    if (control.value === 'younes') {
        return {
            'isnotabadguy': {
                person: control.value,
                reason: 'unknown'
            }
        };
    }

    return null;
};

const isNotInList = (forbiddenList) => (control) => {

    if (forbiddenList.includes(control.value)) {
        return {
            'isnotinlist': {
                person: control.value,
                forbiddenList
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
export class UserFormReactiveComponent implements OnInit {

    @Output() userSubmit = new EventEmitter<User>();

    userForm = new FormGroup({
        firstName: new FormControl(null, [
            Validators.required,
            Validators.minLength(3),
            isNotInList(['younes'])
        ]),
        lastName: new FormControl()
    });

    constructor() {
    }

    ngOnInit() {

        const key = 'form-data';

        const data = localStorage.getItem(key);

        if (data != null) {
            this.userForm.setValue(JSON.parse(data));
        }

        this.userForm.valueChanges
            .subscribe(value => {
                localStorage.setItem(key, JSON.stringify(value));
            });

    }

    submitUser() {

        const user = new User(this.userForm.value);

        this.userSubmit.emit(user);

        this.userForm.reset();

    }
}
