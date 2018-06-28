import {User} from './user';

export class UserStore {
  _userList: User[] = [];

  getUserList(): User[] {
    return this._userList;
  }

  addUser(user: User) {
    if (user.id == null) {
      user.id = this._userList.length ? Math.max(...this._userList.map((_user) => _user.id)) + 1 : 0;
    }
    this._userList = [...this._userList, user];
  }

  removeUser(user: User) {
    this._userList = this._userList.filter((_user) => {
      return _user.id !== user.id;
    });

  }

  updateUser(user: User) {
    const userIndex = this._userList.findIndex((_user) => {
      return _user.id === user.id;
    });
    if (userIndex > -1) {
      this._userList[userIndex] = user;
    }
  }
}
