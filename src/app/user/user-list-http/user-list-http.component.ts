import { Component, OnInit } from '@angular/core';
import { UserResource } from '../user-resource';
import { User } from '../user';
import { Observable } from 'rxjs/Observable';
import { animate, group, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { UserStore } from '../../user-core/user-store';

@Component({
    animations: [
        // trigger('userListContainer', [
        //     transition('* => *', [
        //         state(':enter', style({
        //             transform: 'scale(0)'
        //         })),
        //         query(':enter', style({
        //             transform: 'scale(0)'
        //         }), {optional: true}),
        //         query(':enter', stagger('100ms', [
        //             animate('200ms')
        //         ]), {optional: true})
        //     ])
        // ]),
        trigger('user', [
            state('void', style({
                height: '0',
                transform: 'scale(0)'
            })),
            transition('Foo => void', [
                animate(100, style({
                    transform: 'translateX(100%)'
                }))
            ]),
            transition('* => void', [
                animate(100, style({
                    transform: 'translateX(-100%)'
                }))
            ])
        ])
    ],
    selector: 'wt-user-list-http',
    templateUrl: './user-list-http.component.html',
    styleUrls: ['./user-list-http.component.scss']
})
export class UserListHttpComponent implements OnInit {

    editedUser: User;

    private _userStore = new UserStore();

    constructor(private _userResource: UserResource) {
    }

    ngOnInit() {
        this._userResource.getUserList()
            .subscribe(userList => {
                this._userStore.updateUserList(userList);
            });
    }

    getUserList() {
        return this._userStore.getUserList();
    }

    addUser(user: User) {

        this._userResource.create(user)
            .subscribe((_user) => {
                this._userStore.addUser(_user);
            });

    }

    removeUser(user: User) {

        this._userStore.removeUser(user);

        this._userResource.removeUser(user.id)
            .subscribe(
                () => {},
                () => this._userStore.undo()
            );

    }

    updateUser(oldUser: User, newUser: User) {

        this._userResource.updateUser(oldUser.id, newUser)
            .subscribe((_user) => {
                this._userStore.updateUser(oldUser, _user);
            });

    }

}
