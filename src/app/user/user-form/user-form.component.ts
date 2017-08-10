import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../user';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
    selector: 'wt-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

    @Input() buttonLabel = 'SAVE';
    @Input() isResetButtonDisplayed = true;
    @Input() user = new User();
    @Output() onUserAdd = new EventEmitter<User>();

    userForm: FormGroup;

    constructor() {

        const passwordMatchValidator = (field1, field2) => (formGroup) => {
            return formGroup.value[field1] === formGroup.value[field2] ? null : {mismatch: true};
        };

        this.userForm = new FormGroup({
            firstName: new FormControl(),
            lastName: new FormControl(),
            email: new FormControl(),
            password1: new FormControl(),
            password2: new FormControl(),
        },
            passwordMatchValidator('password1', 'password2'));

    }

    addUser() {
        this.onUserAdd.emit(new User(this.userForm.value));
        this.reset();
    }

    reset() {
        this.userForm.reset();
    }

    getControlList() {
        return (Object as any).values(this.userForm.controls);
    }
}
