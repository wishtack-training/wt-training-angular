import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserTeamAModule } from '../user-team-a/user-team-a.module';
import { UserTeamBModule } from '../user-team-b/user-team-b.module';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list-container/user-list.component';
import { UserPreviewComponent } from './user-preview/user-preview.component';
import { UserSearchComponent } from './user-search/user-search.component';

@NgModule({
    declarations: [
        UserListComponent,
        UserPreviewComponent,
        UserFormComponent,
        UserSearchComponent
    ],
    exports: [
        UserListComponent,
        UserPreviewComponent,
        UserFormComponent,
        UserSearchComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        UserTeamAModule,
        UserTeamBModule
    ]
})
export class UserModule {
}
