/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { UserModule } from '../../user/user.module';

import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserSearchComponent } from './user-search/user-search.component';

@NgModule({
    declarations: [
        UserListComponent,
        UserSearchComponent,
        UserDetailComponent
    ],
    exports: [
        UserListComponent,
        UserSearchComponent,
        UserDetailComponent
    ],
    imports: [
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: 'list',
                component: UserListComponent
            },
            {
                path: 'search',
                component: UserSearchComponent
            },
            {
                path: 'detail/:userId',
                component: UserDetailComponent
            },
        ]),
        SharedModule,
        UserModule
    ]
})
export class UserRoutingModule {
}
