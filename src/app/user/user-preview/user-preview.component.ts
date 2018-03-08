import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-user-preview',
    templateUrl: './user-preview.component.html',
    styleUrls: ['./user-preview.component.scss']
})
export class UserPreviewComponent implements OnInit {

    @Input() user: User;

    constructor() {
    }

    ngOnInit() {
    }

    getPictureUrl(user: User) {
        return 'https://robohash.org/' + user.firstName;
    }

}
