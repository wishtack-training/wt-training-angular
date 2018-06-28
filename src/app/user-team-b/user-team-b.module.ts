import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserContainerComponent } from './user-container/user-container.component';
import { UserFormBComponent } from './user-form/user-form-b.component';

@NgModule({
    declarations: [
        UserContainerComponent,
        UserFormBComponent
    ],
    entryComponents: [
        UserFormBComponent
    ],
    exports: [
        UserContainerComponent,
        UserFormBComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class UserTeamBModule {
}
