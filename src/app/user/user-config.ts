import { Injectable } from '@angular/core';
import { UserListHeaderAComponent } from './user-list-header-a/user-list-header-a.component';

@Injectable()
export class UserConfig {

    isInlineEdit = true;

    userListHeaderComponent = UserListHeaderAComponent;

}
