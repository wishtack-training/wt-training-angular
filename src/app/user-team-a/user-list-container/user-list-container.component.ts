import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {UserStore} from '../user-store';

@Component({
  selector: 'wt-user-list-container',
  templateUrl: './user-list-container.component.html',
  styleUrls: ['./user-list-container.component.scss']
})
export class UserListContainerComponent implements OnInit {
  userList: User[] = [];
  userStore = new UserStore();

  constructor() {
    this.userStore.addUser(new User(1, 'Nathalie', 'ARDUINI'));
    this.userStore.addUser(new User(2, 'Lorena', 'GALVEZ'));
    this.refresh();
  }

  ngOnInit() {
  }

  refresh() {
    this.userList = this.userStore.getUserList();
  }

  onUserSubmit(user: User) {
    if (user.id) {
      this.userStore.updateUser(user);
    } else {
      this.userStore.addUser(user);
    }
    this.refresh();
  }

  onUserRemove(user: User) {
    this.userStore.removeUser(user);
    this.refresh();
  }

  onUserUpdate(user: User) {
    this.userStore.updateUser(user);
    this.refresh();
  }
}
