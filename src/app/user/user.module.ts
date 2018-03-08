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
import { UserStore } from './user-store';
import { UserResource } from './user-resource';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
    declarations: [
        UserFormComponent,
        UserListComponent,
        UserPreviewComponent,
        UserDetailComponent
    ],
    exports: [
        UserFormComponent,
        UserListComponent,
        UserPreviewComponent
    ],
    imports: [
        HttpClientModule,
        ReactiveFormsModule,
        SharedModule
    ],
    /* @TODO: Move this to `UserCoreModule.forRoot` and import it in `AppModule` to avoid lazy loading duplicate instance issues... */
    providers: [
        UserResource,
        UserStore
    ]
})
export class UserModule {

}
