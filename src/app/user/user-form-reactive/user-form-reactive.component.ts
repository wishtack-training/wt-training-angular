import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { cobolConstraint, startsWithTgi } from './user-form-validators';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';


@Component({
    selector: 'wt-user-form',
    templateUrl: './user-form-reactive.component.html',
    styleUrls: ['./user-form-reactive.component.css']
})
export class UserFormReactiveComponent implements OnInit {

    @Output() onUserSubmit = new EventEmitter<User>();

    userForm: FormGroup;

    constructor() {

        this.userForm = new FormGroup({
                firstName: new FormControl(null, [
                    Validators.required,
                    Validators.maxLength(5)
                ]),
                lastName: new FormControl(null, [])
            },
            [
                cobolConstraint
            ]);

    }

    ngOnInit() {
    }

    addUser() {
        const user = new User(this.userForm.value);
        this.onUserSubmit.emit(user);
        this.userForm.reset();
    }

}
