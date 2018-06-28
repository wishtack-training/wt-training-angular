import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserTeamAModule } from '../user-team-a/user-team-a.module';
import { UserTeamBModule } from '../user-team-b/user-team-b.module';
import { UserListComponent } from './user-list-container/user-list.component';

@NgModule({
    declarations: [
        UserListComponent
    ],
    exports: [
        UserListComponent
    ],
    imports: [
        CommonModule,
        UserTeamAModule,
        UserTeamBModule
    ]
})
export class UserModule {
}
