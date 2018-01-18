/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { UserModule } from '../../user/user.module';
import { Route, RouterModule } from '@angular/router';
import { UserListViewComponent } from './user-list-view/user-list-view.component';
import { UserDetailViewComponent } from './user-detail-view/user-detail-view.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

export const routes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        component: UserListViewComponent
    },
    {
        path: ':userId',
        component: UserDetailViewComponent
    }
];


@NgModule({
    declarations: [
        UserListViewComponent,
        UserDetailViewComponent
    ],
    exports: [
        UserListViewComponent,
        UserDetailViewComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild(routes),
        UserModule
    ]
})
export class UserViewsModule {
}
