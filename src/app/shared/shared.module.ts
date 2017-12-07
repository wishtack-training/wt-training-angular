/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    exports: SharedModule.MODULE_LIST,
    imports: SharedModule.MODULE_LIST
})
export class SharedModule {

    static MODULE_LIST = [
        CommonModule
    ];

}
