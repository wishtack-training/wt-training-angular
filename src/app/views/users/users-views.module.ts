/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { UserListViewComponent } from './user-list-view/user-list-view.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './users-views.routes';
import { UserModule } from '../../user/user.module';
import { UserDetailViewComponent } from './user-detail-view/user-detail-view.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [
        UserListViewComponent,
        UserDetailViewComponent
    ],
    imports: [
        RouterModule.forChild(ROUTES),
        SharedModule,
        UserModule
    ]
})
export class UserViewsModule {
}
