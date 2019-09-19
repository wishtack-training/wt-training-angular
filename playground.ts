import { interval } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';

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
