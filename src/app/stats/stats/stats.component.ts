import { Component, OnInit } from '@angular/core';
import { StatsHelper } from '../stats-helper';

@Component({
    selector: 'wt-stats',
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

    result: number;

    constructor(private _statsHelper: StatsHelper) {
    }

    ngOnInit() {
    }

    updateStats() {
        this.result = this._statsHelper.getSolution();
    }
}
