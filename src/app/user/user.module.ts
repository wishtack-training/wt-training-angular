/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserListComponent } from './user-list/user-list.component';
import { UserPreviewComponent } from './user-preview/user-preview.component';
import { UserSelectorComponent } from './user-selector/user-selector.component';
import { SharedModule } from '../shared/shared.module';
import { UserFormComponent } from './user-form/user-form.component';
import { UserFormReactiveComponent } from './user-form-reactive/user-form-reactive.component';
import { UserStore } from '../user-core/user-store';

@NgModule({
    declarations: [
        UserFormComponent,
        UserListComponent,
        UserPreviewComponent,
        UserSelectorComponent,
        UserFormReactiveComponent
    ],
    exports: [
        UserFormComponent,
        UserListComponent,
        UserPreviewComponent,
        UserSelectorComponent,
        UserFormReactiveComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class UserModule {
}
