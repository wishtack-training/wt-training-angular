/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppConfig } from './app-config';

@NgModule({
    exports: SharedModule.MODULE_LIST,
    imports: SharedModule.MODULE_LIST,
    providers: [
        AppConfig
    ]
})
export class SharedModule {

    static MODULE_LIST = [
        CommonModule
    ];

}
