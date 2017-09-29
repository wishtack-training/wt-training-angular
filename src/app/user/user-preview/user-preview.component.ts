import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { User } from '../user';

@Component({
    selector: 'wt-user-preview',
    templateUrl: './user-preview.component.html',
    styleUrls: ['./user-preview.component.css']
})
export class UserPreviewComponent implements OnChanges {

    @Input() user: User;
    @Output() onUserRemove = new EventEmitter();

    pictureUrl: string;

    ngOnChanges(changes) {

        if (changes.user != null) {
            this.pictureUrl = this._getPictureUrl(this.user);

        }

    }

    removeUser() {
        this.onUserRemove.emit();
    }

    _getPictureUrl(user: User) {

        const userName = encodeURIComponent(user.firstName);

        return `https://robohash.org/${userName}`;

    }

}
