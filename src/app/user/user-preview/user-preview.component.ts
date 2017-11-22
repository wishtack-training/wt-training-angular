/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { User } from '../user';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-user-preview',
    styleUrls: [
        './user-preview.component.scss'
    ],
    templateUrl: './user-preview.component.html'
})
export class UserPreviewComponent implements OnChanges {

    @Input() user: User;

    pictureUrl: string;

    private _pictureUrlPrefix = 'https://robohash.org/';

    ngOnChanges(changes) {
        if (changes.user) {
            this.pictureUrl = this._getPictureUrl(this.user);
        }
    }

    private _getPictureUrl(user: User) {
        const path = encodeURIComponent(user.firstName);
        return `${this._pictureUrlPrefix}${path}`;
    }

}
