import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../user';

@Component({
    selector: 'wt-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

    @Input() buttonLabel = 'SAVE';
    @Input() isResetButtonDisplayed = true;
    @Input() user: User;
    @Output() onUserAdd = new EventEmitter<User>();


    constructor() {
        this.reset();
    }

    addUser() {
        this.onUserAdd.emit(this.user);
        this.reset();
    }

    reset() {
        this.user = new User();
    }

}
