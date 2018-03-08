/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserPreviewComponent } from './user-preview/user-preview.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

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
    imports: [
        ReactiveFormsModule,
        SharedModule
    ]
})
export class UserModule {

}
