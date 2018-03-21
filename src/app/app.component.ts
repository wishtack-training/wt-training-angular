import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

    addUser() {
        const user = this.userForm.value;
        this.userList = [...this.userList, user];
        this.userForm.reset();
    }

}
