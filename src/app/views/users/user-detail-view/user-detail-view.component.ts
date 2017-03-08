import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'wt-user-detail-view',
    templateUrl: './user-detail-view.component.html',
    styleUrls: ['./user-detail-view.component.css']
})
export class UserDetailViewComponent implements OnInit {

    obsUserId: Observable<string>;

    constructor(private _route: ActivatedRoute) {
    }

    ngOnInit() {
        this.obsUserId = this._route.params.map((params) => params['userId']);
    }

}
