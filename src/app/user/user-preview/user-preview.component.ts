import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { User } from '../user';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-user-preview',
    templateUrl: './user-preview.component.html',
    styleUrls: ['./user-preview.component.scss']
})
export class UserPreviewComponent implements OnChanges {

    @Input() user: User;
    @Output() userChange = new EventEmitter<User>();

    previousUser: User;

    constructor() {
    }

    ngOnChanges(changes) {
        if (changes.user != null) {
            this.previousUser = changes.user.previousValue;
        }
    }

    getPictureUrl(user: User) {
        return `https://robohash.org/${user.firstName}?set=set4`;
    }

    resetToPreviousValue() {
        this.userChange.emit(this.previousUser);
    }

}
