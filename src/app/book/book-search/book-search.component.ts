import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { debounceTime, startWith, switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../../user/user';
import { UserStore } from '../../user/user-store';
import { Book } from '../book';
import { BookRepository } from '../book-repository';


@Component({
    selector: 'wt-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

    bookFormGroup = new FormGroup({
        title: new FormControl()
    });
    bookList$: Observable<Book[]>;

    constructor(private _bookRepository: BookRepository, private _userStore: UserStore) {
        setInterval(() => {
            this._userStore.addUser(new User({firstName: 'Foo'}));
        }, 1000);
    }

    ngOnInit() {

        this.bookFormGroup.setValue({
            title: 'eXtreme Programming'
        });

        this.bookList$ = this.bookFormGroup.valueChanges
            .pipe(
                debounceTime(200),
                startWith(this.bookFormGroup.value),
                switchMap(value => {
                    const title = value.title;
                    return this._bookRepository.searchBookList(title);
                })
            );

    }

}
