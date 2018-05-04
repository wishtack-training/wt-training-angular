import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../user';

@Component({
    selector: 'wt-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

    @Output() userSubmit = new EventEmitter<User>();

    formUser = new User();

    constructor() {
    }

    ngOnInit() {
    }

    addUser() {
        this.userSubmit.emit(this.formUser);
        this.formUser = new User();
    }

}
