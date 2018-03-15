/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from '../../user/user-list/user-list.component';
import { UserModule } from '../../user/user.module';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: UserListComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        UserModule
    ]
})
export class UserRoutingModule {

}

