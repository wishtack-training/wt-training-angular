/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from '../../user/user.module';
import { UserListViewComponent } from './user-list-view/user-list-view.component';
import { UserDetailViewComponent } from './user-detail-view/user-detail-view.component';
import { ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
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
        UserDetailViewComponent,
        UserListViewComponent
    ],
    imports: [
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        SharedModule,
        UserModule
    ]
})
export class UserRoutingModule {

}

