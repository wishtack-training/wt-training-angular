/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { UserStore } from './user-store';
import { FrenchArmyForm, USArmyForm, UserFormComponent } from './user-form/user-form.component';

@NgModule({
    declarations: [
        UserFormComponent,
        UserListComponent,
        FrenchArmyForm,
        USArmyForm
    ],
    entryComponents: [
        FrenchArmyForm,
        USArmyForm
    ],
    exports: [
        UserFormComponent,
        UserListComponent
    ],
    imports: [
        ReactiveFormsModule,
        SharedModule
    ],
    providers: [
        UserStore
    ]
})
export class UserModule {

}
