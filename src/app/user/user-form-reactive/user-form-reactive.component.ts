import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../user';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'wt-user-form-reactive',
    templateUrl: './user-form-reactive.component.html',
    styleUrls: ['./user-form-reactive.component.css']
})
export class UserFormReactiveComponent {

    @Output() onUserSubmit = new EventEmitter<User>();

    userForm = new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl()
    });

    addUser() {

        const user = new User(this.userForm.value);

        this.onUserSubmit.emit(user);

    }

}
