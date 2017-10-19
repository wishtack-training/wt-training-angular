/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { UserSelectorComponent } from './user-selector/user-selector.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { UserStore } from './user-store';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
    declarations: [
        UserFormComponent,
        UserListComponent,
        UserSelectorComponent
    ],
    exports: [
        UserFormComponent,
        UserListComponent,
        UserSelectorComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    providers: [
        UserStore
    ]
})
export class UserModule {
}
