import { Exception } from '../../lib/exception';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class EmptyDataListError extends Exception {
    constructor() {
        super('Empty data list!');
    }
}


@Injectable()
export class StatsHelper {

    constructor(private _httpClient: HttpClient) {
    }

    /**
     * @param {number[]} dataList
     */
    calculateAverage(dataList: number[]): number {

        if (dataList.length === 0) {
            throw new EmptyDataListError();
        }

        const sum = dataList.reduce((result, data) => result + data, 0);

        return Math.round(sum / dataList.length);

    }

}
