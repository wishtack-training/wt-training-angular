/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormReactiveComponent } from './user-form-reactive/user-form-reactive.component';
import { UserSelectorComponent } from './user-selector/user-selector.component';
import { UserPreviewComponent } from './user-preview/user-preview.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserStore } from './user-store';

@NgModule({
    declarations: [
        UserFormComponent,
        UserFormReactiveComponent,
        UserPreviewComponent,
        UserSelectorComponent,
        UserListComponent
    ],
    exports: [
        UserFormComponent,
        UserFormReactiveComponent,
        UserPreviewComponent,
        UserSelectorComponent,
        UserListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        UserStore
    ]
})
export class UserModule {

}
