import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../user';

@Component({
    selector: 'wt-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

    @Output() onUserSubmit = new EventEmitter<User>();

    user = new User();

    addUser() {
        this.onUserSubmit.emit(this.user);
        this.user = new User();
    }

}

