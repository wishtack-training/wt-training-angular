/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { UserStore } from './user-store';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { UserPreviewComponent } from './user-preview/user-preview.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        UserFormComponent,
        UserListComponent,
        UserPreviewComponent
    ],
    exports: [
        UserFormComponent,
        UserListComponent,
        UserPreviewComponent
    ],
    providers: [
        UserStore
    ],
    imports: [
        ReactiveFormsModule,
        SharedModule
    ]
})
export class UserModule {
}
