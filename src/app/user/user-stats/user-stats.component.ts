import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { User } from '../user';

@Component({
    selector: 'wt-user-stats',
    templateUrl: './user-stats.component.html',
    styleUrls: ['./user-stats.component.css']
})
export class UserStatsComponent implements OnChanges {

    @Input() userList: User[];
    @Output() onUndo = new EventEmitter();
    userCount: number;

    ngOnChanges(changes) {

        if (changes.userList != null) {
            this.userCount = this.userList.length;
        }

    }

    undo() {
        this.onUndo.emit();
    }

}
