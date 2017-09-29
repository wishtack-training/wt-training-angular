import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
    selector: 'wt-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

    @Output() onUserSubmit = new EventEmitter<User>();

    form: FormGroup;

    constructor() {

        this.form = new FormGroup(
            {
                firstName: new FormControl(
                    null,
                    Validators.required
                ),
                lastName: new FormControl(null)
            }
        );
    }

    addUser() {
        const user = new User(this.form.value);
        this.onUserSubmit.emit(user);
        this.form.reset();
    }

    getControlList() {
        return Object.values(this.form.controls);
    }

}
