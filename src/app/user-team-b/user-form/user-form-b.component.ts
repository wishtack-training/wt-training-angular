import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {UserStore} from '../user-store';
import {User} from '../user';

@Component({
  selector: 'wt-user-form-b',
  templateUrl: './user-form-b.component.html',
  styleUrls: ['./user-form-b.component.css']
})
export class UserFormBComponent implements OnInit {

  @Input() inputDisabled: boolean;
  @Input() userStore: UserStore;
  @Input() user: User;
  @Output() userSubmit = new EventEmitter<User>();

  constructor() {}

  ngOnInit() {
    if (this.user === undefined) {
      this.user = new User();
    }
  }

  addUser() {
    this.userSubmit.emit(this.user);
    this.user = new User();
  }

  removeUser() {
    this.userStore.removeUser(this.user);
  }

  editUser() {
    this.userStore.editUser(this.user);
  }

}
