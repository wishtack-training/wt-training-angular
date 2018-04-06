/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material';

@NgModule({
    imports: SharedModule.MODULE_LIST,
    exports: SharedModule.MODULE_LIST
})
export class SharedModule {

    static MODULE_LIST = [
        CommonModule,
        FlexLayoutModule,
        MatButtonModule
    ];

}
