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
import { UserMapComponent } from './user-map/user-map.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        UserFormComponent,
        UserListComponent,
        FrenchArmyForm,
        USArmyForm,
        UserMapComponent
    ],
    entryComponents: [
        FrenchArmyForm,
        USArmyForm
    ],
    exports: [
        UserFormComponent,
        UserListComponent,
        UserMapComponent
    ],
    imports: [
        HttpClientModule,
        ReactiveFormsModule,
        SharedModule
    ],
    providers: [
        UserStore
    ]
})
export class UserModule {

}
