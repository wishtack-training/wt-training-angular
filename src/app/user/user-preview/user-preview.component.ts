import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../user';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-user-preview',
    templateUrl: './user-preview.component.html',
    styleUrls: ['./user-preview.component.scss']
})
export class UserPreviewComponent {

    @Input() isNameDisplayed = true;
    @Input() user: User;

    getPictureUrl(user: User) {
        return `http://robohash.org/${user.firstName}`;
    }

}
