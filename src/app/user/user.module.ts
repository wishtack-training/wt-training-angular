/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { UserPreviewComponent } from './user-preview/user-preview.component';
import { UserFormReactiveComponent } from './user-form-reactive/user-form-reactive.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserStore } from './user-store';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        UserFormReactiveComponent,
        UserListComponent,
        UserPreviewComponent
    ],
    exports: [
        UserFormReactiveComponent,
        UserListComponent,
        UserPreviewComponent
    ],
    imports: [
        ReactiveFormsModule,
        SharedModule
    ],
    providers: [
        UserStore
    ]
})
export class UserModule {
}
