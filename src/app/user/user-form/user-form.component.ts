import { Component, EventEmitter, Output } from '@angular/core';

import { User } from '../user';

@Component({
    selector: 'wt-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

    @Output() onUserSubmit = new EventEmitter<User>();

    user: User = new User();

    submitUser() {
        this.onUserSubmit.emit(this.user);
        this.user = new User();
    }

}
