/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserListComponent } from './user-list/user-list.component';
import { UserPreviewComponent } from './user-preview/user-preview.component';
import { UserSelectorComponent } from './user-selector/user-selector.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        UserListComponent,
        UserPreviewComponent,
        UserSelectorComponent
    ],
    exports: [
        UserListComponent,
        UserPreviewComponent,
        UserSelectorComponent
    ],
    imports: [
        FormsModule,
        SharedModule
    ]
})
export class UserModule {
}
