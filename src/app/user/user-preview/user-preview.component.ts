import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
    selector: 'wt-user-preview',
    templateUrl: './user-preview.component.html',
    styleUrls: ['./user-preview.component.scss']
})
export class UserPreviewComponent implements OnInit {

    @Input() user: User;

    ngOnInit() {
    }

    getPictureUrl() {
        return `https://robohash.org/${this.user.firstName}`;
    }

}
