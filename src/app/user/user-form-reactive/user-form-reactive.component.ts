import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../user';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
            Validators.required
        ]),
        lastName: new FormControl(null),
        // email: new FormControl(null, [
        //     Validators.required,
        //     Validators.minLength(3)
        // ])
    });

    constructor() {
    }

    ngOnInit() {

    }

    getControls() {
        return Object.values(this.formGroup.controls);
    }

    submitUser() {
        const user = new User(this.formGroup.value);
        this.onUserSubmit.emit(user);
        this.formGroup.reset();
    }
}
