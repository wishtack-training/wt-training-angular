import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit,
    SimpleChanges
} from '@angular/core';
import { User } from '../user';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-user-preview',
    templateUrl: './user-preview.component.html',
    styleUrls: ['./user-preview.component.scss']
})
export class UserPreviewComponent implements OnChanges, OnDestroy, OnInit {

    @Input() user: User;

    lifeTime = 0;

    pictureUrl: string;

    private _interval;

    constructor(private _changeDetector: ChangeDetectorRef) {
    }

    ngOnInit() {

        this._interval = setInterval(() => {
            this.lifeTime++;
            this._changeDetector.markForCheck();
        }, 1000);

    }

    ngOnChanges(changes: SimpleChanges) {

        if (changes.user != null) {
            this.pictureUrl = this._getPictureUrl(this.user);
        }

    }

    ngOnDestroy() {
        clearInterval(this._interval);
    }

    private _getPictureUrl(user: User) {
        console.log('getPictureUrl');
        return `https://robohash.org/${user.firstName}`;
    }

}
