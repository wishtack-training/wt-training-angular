import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserContainerComponent } from './user-container/user-container.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
    declarations: [
        UserContainerComponent,
        UserFormComponent
    ],
    exports: [
        UserContainerComponent,
        UserFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class UserTeamBModule {
}
