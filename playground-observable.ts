/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { Observable } from 'rxjs';

const temperatureHistory = [1, 5, 3, 4, null, 300, 6, 7, 10, 3, 4];

const data$ = Observable.interval(100)
    .map(data => temperatureHistory[data]);

data$
    .takeWhile(data => data !== undefined)
    .filter(data => data != null)
    .bufferTime(400)
    .subscribe(data => console.log(data), () => console.log('error'));
