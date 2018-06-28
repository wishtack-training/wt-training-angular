import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'wt-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit {
  @Input() user: User;
  @Output() userRemove = new EventEmitter<User>();
  @Output() userUpdate = new EventEmitter<User>();
  editing = false;

  constructor() {
  }

  ngOnInit() {
  }

  removeUser() {
    this.userRemove.emit(this.user);
  }

  editUser() {
    this.editing = true;
  }

  updateUser(user: User) {
    this.userUpdate.emit(user);
    this.editing = false;
  }

  cancelEdit() {
    this.editing = false;
  }
}
