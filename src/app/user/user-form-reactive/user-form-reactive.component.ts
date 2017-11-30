import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../user';

@Component({
    selector: 'wt-user-form-reactive',
    templateUrl: './user-form-reactive.component.html',
    styleUrls: ['./user-form-reactive.component.scss']
})
export class UserFormReactiveComponent {

    @Output() onUserSubmit = new EventEmitter<User>();

    userForm: FormGroup;

    constructor() {

        this.userForm = new FormGroup({
            firstName: new FormControl(),
            lastName: new FormControl()
        });

    }

    submitUser() {

        /* @hack @todo use named parameters instead of this hack. */
        const user = Object.assign(
            new User(),
            this.userForm.value
        );
        this.onUserSubmit.emit(user);

    }

}
