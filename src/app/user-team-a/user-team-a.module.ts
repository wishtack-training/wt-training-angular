import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UserNameComponent } from './user-name/user-name.component';

@NgModule({
    declarations: [
        UserFormComponent,
        UserListContainerComponent,
        UserListItemComponent,
        UserNameComponent
    ],
    exports: [
        UserFormComponent,
        UserListContainerComponent,
        UserListItemComponent,
        UserNameComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class UserTeamAModule {
}
