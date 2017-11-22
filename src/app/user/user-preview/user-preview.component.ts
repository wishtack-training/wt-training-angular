/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user';

@Component({
    selector: 'wt-user-preview',
    styleUrls: [
        './user-preview.component.scss'
    ],
    templateUrl: './user-preview.component.html'
})
export class UserPreviewComponent {

    @Input() user: User;

    private _pictureUrlPrefix = 'https://robohash.org/';

    getPictureUrl(user: User) {
        const path = encodeURIComponent(user.firstName);
        return `${this._pictureUrlPrefix}${path}`;
    }

}
