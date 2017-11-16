import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
    selector: 'wt-user-preview',
    templateUrl: './user-preview.component.html',
    styleUrls: ['./user-preview.component.scss']
})
export class UserPreviewComponent implements OnInit {

    @Input() user;

    constructor() {
    }

    ngOnInit() {
    }

    getUserPictureUrl() {
        return `http://robohash.org/${encodeURIComponent(this.user.firstName)}`;
    }

}
