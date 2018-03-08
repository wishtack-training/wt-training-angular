/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    exports: SharedModule.MODULE_LIST,
    imports: SharedModule.MODULE_LIST
})
export class SharedModule {

    static readonly MODULE_LIST = [
        CommonModule,
        RouterModule
    ];

}
