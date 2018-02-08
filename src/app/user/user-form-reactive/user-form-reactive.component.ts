import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../user';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

const userBusinessIdValidator: ValidatorFn = (control: AbstractControl) => {

    if (control.value == null) {
        return null;
    }

    if (control.value.startsWith('wt')) {
        return null;
    }

    return {
        businessId: true
    };

};

@Component({
    selector: 'wt-user-form-reactive',
    templateUrl: './user-form-reactive.component.html',
    styleUrls: ['./user-form-reactive.component.css']
})
export class UserFormReactiveComponent implements OnInit {

    @Input() buttonLabel = 'SUBMIT';
    @Output() onUserSubmit = new EventEmitter<User>();

    formGroup = new FormGroup({
        firstName: new FormControl(null, [
            Validators.required,
            Validators.minLength(3),
        ]),
        lastName: new FormControl(null)
        // userBusinessId: new FormControl(null, [
        //     userBusinessIdValidator
        // ])
        // email: new FormControl(null, [
        //     Validators.required,
        //     Validators.minLength(3)
        // ])
    });

    constructor() {
    }

    ngOnInit() {

    }

    getControlList() {
        return Object.values(this.formGroup.controls);
    }

    submitUser() {
        const user = new User(this.formGroup.value);
        this.onUserSubmit.emit(user);
        this.formGroup.reset();
    }
}
