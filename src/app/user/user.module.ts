/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserPreviewComponent } from './user-preview/user-preview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { UserFormReactiveComponent } from './user-form-reactive/user-form-reactive.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        UserListComponent,
        UserPreviewComponent,
        UserFormComponent,
        UserFormReactiveComponent
    ],
    exports: [
        UserListComponent,
        UserPreviewComponent,
        UserFormComponent,
        UserFormReactiveComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ]
})
export class UserModule {
}
