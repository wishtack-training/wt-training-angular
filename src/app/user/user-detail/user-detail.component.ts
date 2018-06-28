import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'wt-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

    userId: string;

    constructor(private _activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.userId = this._activatedRoute.snapshot.paramMap.get('userId');
    }

}
