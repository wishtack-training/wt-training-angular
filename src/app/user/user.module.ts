import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserTeamAModule } from '../user-team-a/user-team-a.module';
import { UserTeamBModule } from '../user-team-b/user-team-b.module';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list-container/user-list.component';
import { UserPreviewComponent } from './user-preview/user-preview.component';

@NgModule({
    declarations: [
        UserListComponent,
        UserPreviewComponent,
        UserFormComponent
    ],
    exports: [
        UserListComponent,
        UserPreviewComponent,
        UserFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UserTeamAModule,
        UserTeamBModule
    ]
})
export class UserModule {
}
