import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserPreviewComponent } from './user-preview/user-preview.component';

@NgModule({
    declarations: [
        UserFormComponent,
        UserListComponent,
        UserPreviewComponent
    ],
    exports: [
        UserFormComponent,
        UserListComponent,
        UserPreviewComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class UserModule {
}
