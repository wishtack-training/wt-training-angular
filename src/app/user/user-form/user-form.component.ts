import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../user';

@Component({
    selector: 'wt-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

    @Output() onUserSubmit = new EventEmitter<User>();

    userTmp = new User();

    addUser() {
        this.onUserSubmit.emit(this.userTmp);
        this.userTmp = new User();
    }

}
