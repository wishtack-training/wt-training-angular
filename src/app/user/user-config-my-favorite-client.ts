import { UserConfig } from './user-config';
import { UserListHeaderBComponent } from './user-list-header-b/user-list-header-b.component';

export class UserConfigMyFavoriteClient extends UserConfig {

    isInlineEdit = false;

    userListHeaderComponent = UserListHeaderBComponent;

}
