import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'wt-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.scss']
})
export class UserNameComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

  getAvatar(user: User) {
    return `https://robohash.org/${user.firstName}${user.lastName}?size=50x50&set=set4`;
  }
}
