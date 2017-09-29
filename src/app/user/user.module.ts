/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { UserStore } from './user-store';
import { CommonModule } from '@angular/common';
import { UserStatsComponent } from './user-stats/user-stats.component';

@NgModule({
    declarations: [
        UserListComponent,
        UserStatsComponent
    ],
    exports: [
        UserListComponent,
        UserStatsComponent
    ],
    providers: [
        UserStore
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class UserModule {
}

