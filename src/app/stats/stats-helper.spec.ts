/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { EmptyDataListError, StatsHelper } from './stats-helper';
import { async, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { StatsModule } from './stats.module';

describe('StatsHelper', () => {

    let statsHelper: StatsHelper;

    beforeEach(async(() => {

        TestBed
            .configureTestingModule({
                imports: [
                    StatsModule
                ]
            })
            .compileComponents();

    }));

    beforeEach(() => statsHelper = TestBed.get(StatsHelper));

    it('should calculate average', () => {

        const dataList = [15, 10, 21];

        const result = statsHelper.calculateAverage(dataList);

        expect(result).toEqual(15);

    });

    it('should raise exception if data array is empty', async(() => {

        expect(() => {
            statsHelper.calculateAverage([]);
        }).toThrow(new EmptyDataListError());

    }));



});

