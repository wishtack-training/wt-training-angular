import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
    selector: 'wt-user-form-reactive',
    templateUrl: './user-form-reactive.component.html',
    styleUrls: ['./user-form-reactive.component.css']
})
export class UserFormReactiveComponent implements OnInit {

    @Output() onUserSubmit = new EventEmitter<User>();

    userFormGroup = new FormGroup({
        firstName: new FormControl(null, [
            Validators.required
        ]),
        lastName: new FormControl(null)
    });

    ngOnInit() {
        this.userFormGroup.valueChanges
            .debounceTime(300)
            .subscribe((value) => {
                console.log(value);
            });
    }

    submitUser() {
        const user = new User(this.userFormGroup.value);
        this.onUserSubmit.emit(user);
        this.userFormGroup.reset();
    }

}
