import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StatsHelper } from './stats/stats-helper';
import { UserRepository } from './user/user-repository';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Component({
    selector: 'wt-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    userForm = new FormGroup({
        firstName: new FormControl()
    });
    userList$: Observable<any[]>;
    userCount$: Observable<number>;

    constructor(private _userRepository: UserRepository) {
    }

    ngOnInit() {

        // this._userRepository.getUserList()
        //     .subscribe(userList => this.userList = userList);

        this.userList$ = this._userRepository.getUserList();

        this.userCount$ = this.userList$
            .pipe(
                map(userList => userList.length)
            );

    }

    // addUser() {
    //
    //     const user = this.userForm.value;
    //
    //     this._userRepository.addUser(user)
    //         .subscribe(_user => {
    //             this.userList = [...this.userList, _user];
    //             this.userForm.reset();
    //         });
    //
    // }

}
