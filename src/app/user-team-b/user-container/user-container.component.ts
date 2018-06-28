import { Component, OnInit } from '@angular/core';
import {UserStore} from '../user-store';
import {User} from '../user';

@Component({
  selector: 'wt-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  private _userStore: UserStore;

  constructor() {
    this._userStore = new UserStore();
  }

  ngOnInit() {
  }

  getUserStore() {
    return this._userStore;
  }

  getUserList() {
    return this._userStore.getUserList();
  }

}
