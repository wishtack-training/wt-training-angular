import { Component, OnInit } from '@angular/core';
import { UserFormComponent as UserFormComponentA } from '../../user-team-a/user-form/user-form.component';
import { UserFormComponent as UserFormComponentB } from '../../user-team-b/user-form/user-form.component';
import { UserStore } from '../user-store';
import { User } from '../user';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    componentA = UserFormComponentA;
    componentB = UserFormComponentB;
    component = this.componentA;

    private _userStore = new UserStore();

    constructor() {
        this._userStore.addUser(new User({
            firstName: 'Nathalie',
            lastName: 'ARDUINI'
        }));
        this._userStore.addUser(new User({
            firstName: 'Lorena',
            lastName: 'GALVEZ'
        }));
    }

    ngOnInit() {

    }

    getUserList() {
        return this._userStore.getUserList();
    }

}
