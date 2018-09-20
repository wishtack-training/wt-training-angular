import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
    selector: 'wt-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

    @Output() userSubmit = new EventEmitter<User>();

    userForm = new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(null, [
            Validators.maxLength(20)
        ]),
        addressList: new FormArray([])
    });

    get addressControlList() {
        return this.userForm.get('addressList') as FormArray;
    }

    addAddress() {
        this.addressControlList.push(new FormGroup({
            street: new FormControl(null, [
                Validators.minLength(3)
            ]),
            city: new FormControl()
        }));
    }


    constructor() {
    }

    ngOnInit() {
    }

    submitUser() {
        const user = new User(this.userForm.value);
        this.userSubmit.emit(user);
        this.userForm.reset();
    }

}
