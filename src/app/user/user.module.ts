/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormReactiveComponent } from './user-form-reactive/user-form-reactive.component';
import { UserPreviewComponent } from './user-preview/user-preview.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListHeaderBComponent } from './user-list-header-b/user-list-header-b.component';
import { UserListHeaderAComponent } from './user-list-header-a/user-list-header-a.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserStore } from './user-store';
import { UserConfig } from './user-config';
import { UserConfigMyFavoriteClient } from './user-config-my-favorite-client';

@NgModule({
    declarations: [
        UserFormComponent,
        UserFormReactiveComponent,
        UserListComponent,
        UserListHeaderAComponent,
        UserListHeaderBComponent,
        UserPreviewComponent
    ],
    exports: [
        UserFormComponent,
        UserFormReactiveComponent,
        UserListComponent,
        UserListHeaderAComponent,
        UserListHeaderBComponent,
        UserPreviewComponent
    ],
    entryComponents: [
        UserListHeaderAComponent,
        UserListHeaderBComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        {
            provide: UserConfig,
            useFactory: () => {

                // @TODO: Run your conditions here...
                return new UserConfigMyFavoriteClient();

            }
        },
        UserStore
    ],
})
export class UserModule {
}
