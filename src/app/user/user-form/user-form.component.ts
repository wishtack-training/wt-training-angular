import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
    selector: 'wt-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnChanges, OnInit {

    @Input() buttonLabel = 'ADD';
    @Input() user: User = null;
    @Output() userSubmit = new EventEmitter<User>();

    userForm = new FormGroup({
        firstName: new FormControl(null, [
            Validators.required,
            Validators.minLength(3)
        ]),
        lastName: new FormControl()
    });

    constructor() {
    }

    ngOnInit() {
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

}
