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
    @Input() age: User;
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

        this.reset();
    }

    addUser() {
        this.onUserAdd.emit(this.age);
        this.reset();
    }

    reset() {
        this.age = new User();
    }

    getControlList() {
        return (Object as any).values(this.userForm.controls);
    }
}
