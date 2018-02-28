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
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        UserListComponent,
        UserPreviewComponent
    ],
    exports: [
        UserListComponent,
        UserPreviewComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class UserModule {

}
