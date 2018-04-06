import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';

@Component({
    selector: 'wt-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

    userCount$: Store<number>;

    constructor(private _store: Store<AppState>) {
        /* Or select('userList', 'length')... */
        this.userCount$ = this._store
            .select('userList')
            .select(userList => userList.length);
    }

}
