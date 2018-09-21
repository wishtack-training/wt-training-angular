import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserPreviewComponent } from './user-preview/user-preview.component';
import { UserSearchComponent } from './user-search/user-search.component';

@NgModule({
    imports: [
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [
        UserFormComponent,
        UserListComponent,
        UserPreviewComponent,
        UserSearchComponent
    ],
    exports: [
        UserFormComponent,
        UserListComponent,
        UserPreviewComponent,
        UserSearchComponent
    ]
})
export class UserModule {
}
