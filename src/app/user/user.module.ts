import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserPreviewComponent } from './user-preview/user-preview.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
    declarations: [
        UserFormComponent,
        UserListComponent,
        UserPreviewComponent,
        UserSearchComponent,
        UserDetailComponent
    ],
    exports: [
        UserFormComponent,
        UserListComponent,
        UserPreviewComponent,
        UserSearchComponent,
        UserDetailComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        MatButtonModule,
        ReactiveFormsModule,
        RouterModule
    ]
})
export class UserModule {
}
