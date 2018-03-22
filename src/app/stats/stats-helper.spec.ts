/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { StatsHelper } from './stats-helper';

describe('StatsHelper', () => {

    xit('should calculate average', () => {

        const statsHelper = new StatsHelper();

        const dataList = [15, 10, 21];

        const result = statsHelper.calcuteAverage(dataList);

        expect(result).toEqual(15);

    });

    xit('should raise exception if data array is empty', () => {

    });

});
