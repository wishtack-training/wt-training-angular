import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserPreviewComponent } from './user-preview/user-preview.component';
import { UserSearchComponent } from './user-search/user-search.component';

@NgModule({
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
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule
    ]
})
export class UserModule {
}
