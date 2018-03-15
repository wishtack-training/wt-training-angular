import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user';

@Component({
    selector: 'wt-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

    @Output() userSubmit = new EventEmitter<User>();

    userTmp = new User();

    submitUser() {
        this.userSubmit.emit(this.userTmp);
        this.userTmp = new User();
    }

}
