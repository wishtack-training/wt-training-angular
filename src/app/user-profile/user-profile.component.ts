import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { UserQuery } from '../user/user.query';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  pictureUri$ = this._userQuery.pictureUri$;

  constructor(private _userQuery: UserQuery) {
  }
}

@NgModule({
  declarations: [UserProfileComponent],
  imports: [CommonModule],
  exports: [UserProfileComponent]
})
export class UserProfileModule {
}
