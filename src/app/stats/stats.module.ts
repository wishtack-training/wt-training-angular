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
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [StatsComponent],
    exports: [StatsComponent],
    imports: [
        HttpClientModule,
        SharedModule
    ],
    providers: [
        StatsHelper
    ]
})
export class StatsModule {
}
