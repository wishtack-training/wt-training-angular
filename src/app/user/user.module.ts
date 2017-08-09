/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';
import { SharedModule } from '../shared/shared.module';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserStore } from './user-store';
import { UserDetailContainerComponent } from './user-detail-container/user-detail-container.component';

@NgModule({
    declarations: [
        UserFormComponent,
        UserListComponent,
        UserListContainerComponent,
        UserDetailContainerComponent
    ],
    exports: [
        UserListContainerComponent,
        UserDetailContainerComponent
    ],
    imports: [
        SharedModule
    ],
    providers: [
        UserStore
    ]
})
export class UserModule {

}
