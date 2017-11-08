/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        UserListComponent
    ],
    exports: [
        UserListComponent
    ],
    imports: [
        ReactiveFormsModule,
        SharedModule
    ]
})
export class UserModule {

}
