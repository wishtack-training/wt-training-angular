/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { StatsHelper } from './stats-helper';
import { StatsComponent } from './stats/stats.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [StatsComponent],
    exports: [StatsComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        StatsHelper
    ]
})
export class StatsModule {
}
