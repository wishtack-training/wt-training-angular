import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { User } from '../user';

export const notForbiddenWord: ValidatorFn = (control) => {

    if (control.value === 'younes') {
        return {
            forbidden: {
                forbiddenWord: 'younes',
                value: control.value
            }
        };
    }

    return null;

};

@Component({
    selector: 'wt-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

    @Output() userSubmit = new EventEmitter<any>();

    userForm = new FormGroup({
        firstName: new FormControl(null, [
            Validators.required,
            notForbiddenWord
        ]),
        lastName: new FormControl()
    });

    constructor() {
    }

    ngOnInit() {
    }

    submitUser() {

        const user = new User(this.userForm.value);

        this.userSubmit.emit(user);

        this.userForm.reset();

    }

}
