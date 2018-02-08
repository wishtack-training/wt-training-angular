/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    exports: [
        CommonModule,
        HttpClientModule
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ]
})
export class SharedModule {

}
