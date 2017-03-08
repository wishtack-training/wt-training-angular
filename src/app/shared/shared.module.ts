/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
    imports: SharedModule.MODULE_LIST,
    exports: [
        LoadingComponent,
        ...SharedModule.MODULE_LIST
    ],
    declarations: [LoadingComponent]
})
export class SharedModule {

    static MODULE_LIST = [
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule
    ];

}
