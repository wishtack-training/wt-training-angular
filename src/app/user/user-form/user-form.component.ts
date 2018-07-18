import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { User } from '../user';

export const notForbiddenWord: ValidatorFn = (control) => {

    if (control.value === 'younes') {
        return {
            forbidden: {
                forbiddenWord: 'younes',
                value: control.value
            }
        };
    }

    return null;

};

@Component({
    selector: 'wt-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnChanges {

    @Input() buttonLabel = 'ADD';
    @Input() user: User;
    @Output() cancel = new EventEmitter<void>();
    @Output() userSubmit = new EventEmitter<any>();

    userForm = new FormGroup({
        firstName: new FormControl(null, [
            Validators.required,
            notForbiddenWord
        ]),
        lastName: new FormControl()
    });

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges) {

        if (changes.user != null) {
            this.userForm.reset(this.user);
        }

    }

    submitUser() {

        const user = new User(this.userForm.value);

        this.userSubmit.emit(user);

        this.userForm.reset();

    }

    onCancel() {
        this.userForm.reset();
        this.cancel.emit();
    }
}
