import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../user';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'wt-user-form-a',
    templateUrl: './user-form-a.component.html',
    styleUrls: ['./user-form-a.component.scss']
})
export class UserFormAComponent implements OnInit {

    @Input() user: User;
    @Output() userSubmit = new EventEmitter<User>();
    @Output() cancel = new EventEmitter();

    userForm = new FormGroup({
        firstName: new FormControl(null, [Validators.required]),
        lastName: new FormControl(null, [Validators.required])
    });

    constructor() {
    }

    ngOnInit() {
        if (this.user) {
            this.userForm.patchValue({
                firstName: this.user.firstName,
                lastName: this.user.lastName
            });
        }
    }


    submitUser() {
        if (this.userForm.valid) {
            this.userSubmit.emit(Object.assign(
                {id: this.user ? this.user.id : null},
                this.userForm.value)
            );
            this.userForm.reset();
        }
    }

    cancelEdit() {
        this.cancel.emit();
    }
}
