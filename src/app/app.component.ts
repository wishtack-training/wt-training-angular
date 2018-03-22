import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StatsHelper } from './stats/stats-helper';

@Component({
    selector: 'wt-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    userForm = new FormGroup({
        firstName: new FormControl()
    });
    userList = [];

    constructor(private _statsHelper: StatsHelper) {
        console.log(this._statsHelper.calculateAverage([1, 2, 3]));
    }

    addUser() {
        const user = this.userForm.value;
        this.userList = [...this.userList, user];
        this.userForm.reset();
    }

}
