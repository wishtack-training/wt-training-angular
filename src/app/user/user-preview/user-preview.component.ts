import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-user-preview',
    templateUrl: './user-preview.component.html',
    styleUrls: ['./user-preview.component.scss']
})
export class UserPreviewComponent {

    @Input() user: User;
    @Output() userChange = new EventEmitter<User>();

    constructor() {
    }

    getPictureUrl(user: User) {
        return `https://robohash.org/${user.firstName}?set=set4`;
    }

}
