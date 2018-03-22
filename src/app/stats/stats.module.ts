/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { StatsHelper } from './stats-helper';


@NgModule({
    declarations: [],
    exports: [],
    imports: [
        HttpClientModule
    ],
    providers: [
        StatsHelper
    ]
})
export class StatsModule {
}
