import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFormAComponent } from './user-form/user-form-a.component';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UserNameComponent } from './user-name/user-name.component';

@NgModule({
    declarations: [
        UserFormAComponent,
        UserListContainerComponent,
        UserListItemComponent,
        UserNameComponent
    ],
    entryComponents: [
        UserFormAComponent
    ],
    exports: [
        UserFormAComponent,
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
