import {Component, Input, OnInit} from '@angular/core';
import {UserStore} from '../user-store';
import {User} from '../user';

@Component({
  selector: 'wt-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() inputDisabled: boolean;
  @Input() userStore: UserStore;
  @Input() currentUser: User;

  constructor() {}

  ngOnInit() {
    if (this.currentUser === undefined) {
      this.currentUser = new User();
    }
  }

  addUser() {
    this.userStore.addUser(this.currentUser);
    this.currentUser = new User();
  }

  removeUser() {
    this.userStore.removeUser(this.currentUser);
  }

  editUser() {
    this.userStore.editUser(this.currentUser);
  }

}
