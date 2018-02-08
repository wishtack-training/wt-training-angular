import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../user';

@Component({
    selector: 'wt-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

    @Input() buttonLabel = 'SUBMIT';
    @Output() onUserSubmit = new EventEmitter<User>();

    user = new User();

    constructor() {
    }

    ngOnInit() {
    }

    submitUser() {
        this.onUserSubmit.emit(this.user);
        this.user = new User();
    }

}
