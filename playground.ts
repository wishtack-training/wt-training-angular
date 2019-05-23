import { interval } from 'rxjs';
import { bufferCount, filter, map, retry, take, tap } from 'rxjs/operators';

const source$ = interval(100);

const data$ = source$
    .pipe(
        filter(data => data % 3 === 0),
        map(data => data * 2),
        tap(data => {
            if (data === 48) {
                throw new Error();
            }
        }),
        bufferCount(3),
        take(3),
        retry(2)
    );

data$.subscribe(data => {
    console.log(data);
});
