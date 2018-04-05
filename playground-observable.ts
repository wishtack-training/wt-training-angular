/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { interval } from 'rxjs/observable/interval';
import { bufferCount, filter, map, retry, take } from 'rxjs/operators';

const data$ = interval(1000);

data$
    .pipe(
        map(value => value * 2),
        filter(value => {
            if (value === 6) {
                throw new Error('test');
            }
            return true;
        }),
        take(5),
        bufferCount(2),
        retry(3)
    )
    .subscribe(
        data => console.log(data),
        error => console.log('ERROR'),
        () => console.log('complete')
    );
