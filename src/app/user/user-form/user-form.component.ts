import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from '../user';

@Component({
    selector: 'wt-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnChanges {

    @Input() buttonLabel = 'ADD';
    @Input() user: User;
    @Output() onUserSubmit = new EventEmitter<User>();

    userForm: FormGroup;

    constructor() {

        this.userForm = new FormGroup({
            firstName: new FormControl(null, [
                Validators.required,
                Validators.maxLength(10),
                // startsWithWt
            ]),
            lastName: new FormControl()
        });

    }

    ngOnChanges(changes: SimpleChanges) {

        if (changes.user != null) {
            this.userForm.reset(this.user);
        }

    }

    addUser() {
        const user = new User(this.userForm.value);
        this.onUserSubmit.emit(user);
        this.userForm.reset();
    }

}
