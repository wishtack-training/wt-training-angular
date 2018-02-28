import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../user';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-user-preview',
    templateUrl: './user-preview.component.html',
    styleUrls: ['./user-preview.component.css']
})
export class UserPreviewComponent {

    @Input() user: User;

    getPictureUrl(user: User) {
        return `https://robohash.org/${user.firstName}`;
    }

}
