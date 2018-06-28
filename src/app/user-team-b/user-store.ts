import {User} from './user';

export class UserStore {
  users: Array<User>;

  constructor() {
    this.users = [];
  }

  addUser(user: User) {
    this.users.push(user);
  }

  getUserList() {
    return this.users;
  }

  removeUser(user: User) {
    this.users = this.users.filter(_user => _user !== user);
  }

  editUser(user: User) {
   // this.users.filter(_user => _user.lastName==user.);
  }
}
