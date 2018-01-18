import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
    selector: 'wt-user-form-reactive',
    templateUrl: './user-form-reactive.component.html',
    styleUrls: ['./user-form-reactive.component.css']
})
export class UserFormReactiveComponent implements OnChanges {

    @Input() buttonLabel = 'ADD';
    @Input() user: User;
    @Output() onUserSubmit = new EventEmitter<User>();

    userFormGroup = new FormGroup({
        firstName: new FormControl(null, [
            Validators.required
        ]),
        lastName: new FormControl(null)
    });

    ngOnChanges(changes: SimpleChanges) {

        if (changes.user) {
            this.userFormGroup.reset(this.user);
        }
    }

    submitUser() {
        const user = new User(this.userFormGroup.value);
        this.onUserSubmit.emit(user);
        this.userFormGroup.reset();
    }

}
