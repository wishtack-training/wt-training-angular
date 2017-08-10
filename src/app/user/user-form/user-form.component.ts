import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { User } from '../user';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
    selector: 'wt-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnChanges {
    @Input() buttonLabel = 'SAVE';

    @Input() isResetButtonDisplayed = true;
    @Input() user;
    @Output() onSubmit = new EventEmitter<User>();
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

    ngOnChanges(changes: SimpleChanges) {

        if (changes.user != null) {

            this.userForm.reset(this.user || undefined);

        }

    }

    submit() {

        const user = Object.assign(
            new User(),
            this.user,
            this.userForm.value
        );

        this.onSubmit.emit(user);
        this.reset();
    }

    reset() {
        this.userForm.reset();
    }

    getControlList() {
        return (Object as any).values(this.userForm.controls);
    }
}
