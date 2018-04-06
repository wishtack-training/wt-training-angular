import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { Book } from '../../book/book';
import { AppState } from '../../reducers';
import { User } from '../../user/user';

@Component({
    selector: 'wt-user-detail-view',
    templateUrl: './user-detail-view.component.html',
    styleUrls: ['./user-detail-view.component.css']
})
export class UserDetailViewComponent implements OnInit {

    user: User;

    constructor(private _route: ActivatedRoute,
                private _store: Store<AppState>) {

        const userIndex = this._route.snapshot.params.userId;

        this._store
            .select('userList')
            .select(userList => userList[userIndex])
            .subscribe(user => {
                this.user = user;
            });

    }

    ngOnInit() {
    }

    onSelectBook(book: Book) {

        // this._store.dispatch(new BookRent({
        //     book: book,
        //     user: this.user
        // }));
        alert('Not implemented yet!');

    }

}
