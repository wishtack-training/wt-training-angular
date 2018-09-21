/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { UserListComponent } from '../../user/user-list/user-list.component';
import { UserSearchComponent } from '../../user/user-search/user-search.component';
import { UserModule } from '../../user/user.module';

export const userRoutes: Routes = [
    {
        path: 'search',
        component: UserSearchComponent
    },
    {
        path: 'list',
        component: UserListComponent
    }
];

@NgModule({
    declarations: [],
    exports: [],
    imports: [
        RouterModule.forChild(userRoutes),
        SharedModule,
        UserModule
    ]
})
export class UserViewsModule {
}
