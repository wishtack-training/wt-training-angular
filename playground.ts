import { interval } from 'rxjs';
import { filter, map, shareReplay, take, takeWhile, tap } from 'rxjs/operators';

interval(100)
  .pipe(
    filter(value => value % 3 === 0),
    map(value => value + 10),
    tap(value => {
        if (value === 19) throw new Error('test');
    }),
    take(5)
  )
  .subscribe({
      next: data => console.log(data),
      error: err => console.error('ERROR'),
      complete: () => console.log('DONE!')
  });


/* shareReplay */


const data$ = interval(1000)
  .pipe(tap(console.log), shareReplay({
    bufferSize: 1,
    refCount: true
  }));

let working = true;

data$
  .pipe(takeWhile(() => working))
  .subscribe(d => console.log(`A: ${d}`));

setTimeout(() => {
  data$
    .pipe(takeWhile(() => working))
    .subscribe(d => console.log(`B: ${d}`));
}, 3500);

setTimeout(() => working = false, 5000);
