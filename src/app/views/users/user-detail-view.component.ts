/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'wt-user-detail-view',
    template: `
<div>DETAIL</div>
`
})
export class UserDetailViewComponent implements OnInit {

    constructor(private _route: ActivatedRoute) {
    }

    ngOnInit() {
        console.log(this._route.snapshot.params['userId']);
    }

}
