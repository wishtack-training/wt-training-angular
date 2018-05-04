import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../user';

@Component({
    selector: 'wt-user-form-reactive',
    templateUrl: './user-form-reactive.component.html',
    styleUrls: ['./user-form-reactive.component.css']
})
export class UserFormReactiveComponent implements OnInit {

    @Output() userSubmit = new EventEmitter<User>();

    userForm = new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl()
    });

    constructor() {
    }

    ngOnInit() {
    }

    submitUser() {

        const user = new User(
            this.userForm.value.firstName,
            this.userForm.value.lastName
        );

        this.userSubmit.emit(user);

        this.userForm.reset();

    }
}
