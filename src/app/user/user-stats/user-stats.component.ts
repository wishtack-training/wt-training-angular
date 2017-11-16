import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { User } from '../user';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-user-stats',
    templateUrl: './user-stats.component.html',
    styleUrls: ['./user-stats.component.css']
})
export class UserStatsComponent implements OnChanges {

    @Input() userList: User[];
    count: number;

    constructor() {
    }

    ngOnChanges(changes) {

        if (changes.userList) {
            this.count = this.userList.length;
        }

    }

}
