import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
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

    ngOnChanges(changes: SimpleChanges) {

        if (changes.user != null) {
            this.form.reset(this.user);
        }

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
