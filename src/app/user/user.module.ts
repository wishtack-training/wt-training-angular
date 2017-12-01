import { NgModule } from '@angular/core';

import { UserListComponent } from './user-list/user-list.component';
import { UserPictureUrlPipe } from './user-picture-url.pipe';
import { UserSelectorComponent } from './user-selector/user-selector.component';
import { UserFormReactiveComponent } from './user-form-reactive/user-form-reactive.component';
import { UserPreviewComponent } from './user-preview/user-preview.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared.module';

@NgModule({
    declarations: [
        UserListComponent,
        UserPictureUrlPipe,
        UserPreviewComponent,
        UserSelectorComponent,
        UserFormComponent,
        UserFormReactiveComponent
    ],
    exports: [
        UserListComponent,
        UserPictureUrlPipe,
        UserPreviewComponent,
        UserSelectorComponent,
        UserFormComponent,
        UserFormReactiveComponent
    ],
    imports: [
        SharedModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class UserModule {

}
