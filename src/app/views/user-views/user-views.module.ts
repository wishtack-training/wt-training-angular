/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserListViewComponent } from './user-list-view.component';
import { UserModule } from '../../user/user.module';
import { UserDetailViewComponent } from './user-detail-view.component';
import { SharedModule } from '../../shared/shared.module';
import { USER_VIEWS_ROUTE_LIST } from './user-views.routes';

@NgModule({
    declarations: [
        UserDetailViewComponent,
        UserListViewComponent
    ],
    exports: [
        UserDetailViewComponent,
        UserListViewComponent
    ],
    imports: [
        RouterModule.forChild(USER_VIEWS_ROUTE_LIST ),
        SharedModule,
        UserModule
    ]
})
export class UserViewsModule {

}
