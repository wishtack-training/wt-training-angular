import { Component, ElementRef, Input, OnChanges } from '@angular/core';
import { User } from '../user';

@Component({
    selector: 'wt-user-preview',
    templateUrl: './user-preview.component.html',
    styleUrls: ['./user-preview.component.css']
})
export class UserPreviewComponent implements OnChanges {

    @Input() user: User;

    isPictureLoaded: boolean;
    pictureUrl: string;


    ngOnChanges() {

        this.pictureUrl = null;
        if (this.user != null) {
            this.pictureUrl = `https://robohash.org/${this.user.firstName}`;
        }

    }

}
