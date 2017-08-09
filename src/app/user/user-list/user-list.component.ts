import {
    animate, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output, state,
    style, transition,
    trigger
} from '@angular/core';
import { User } from '../user';

@Component({
    animations: [
        trigger('showHideUser', [
            state('void', style({
                transform: 'scaleY(0)'
            })),
            transition('void => *', animate('100ms ease-in')),
            transition('* => void',
                animate('300ms ease-in',
                    style({
                        transform: 'translateX(100%)'
                    })
                )
            )
        ])
    ],
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnChanges {

    @Input() userList: User[];
    @Output() onUserRemove = new EventEmitter<User>();

    private _isRemovingUserIdList: string[] = [];

    constructor(private _changeDetector: ChangeDetectorRef) {

    }

    ngOnChanges(changes) {

        console.log(changes);

        if (changes.userList) {
            this._cleanupIsRemovingUserIdSet();
        }

    }

    removeUser(user: User) {
        this._isRemovingUserIdList.push(user.id);
        this.onUserRemove.emit(user);
    }

    isRemovingUser(user: User) {
        return new Set(this._isRemovingUserIdList).has(user.id);
    }

    trackUser(index, user) {
        return user.id;
    }

    private _cleanupIsRemovingUserIdSet() {

        if (this.userList == null) {
            return;
        }

        const userIdSet = new Set(this.userList.map((user) => user.id));

        this._isRemovingUserIdList = this._isRemovingUserIdList
            .filter((userId) => userIdSet.has(userId));

    }

}
