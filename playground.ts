import { BehaviorSubject, interval } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

function getTemperature(city) {
    return interval(500)
        .pipe(
            map(value => {
                return {
                    city,
                    temperature: Math.round(Math.random() * 30)
                };
            })
        );
}

// const city$ = interval(3000)
//     .pipe(
//         map(value => {
//             return ['Luxembourg', 'Lyon', 'Paris'][value % 3];
//         })
//     );
//
//
// city$
//     .pipe(
//         switchMap(city => getTemperature(city))
//     )
//     .subscribe(console.log);


const isSignedIn$ = new BehaviorSubject(false);

isSignedIn$.next(true);
isSignedIn$.next(false);

/* Consumer. */
isSignedIn$
    .pipe(distinctUntilChanged())
    .subscribe(data => console.log(data));

isSignedIn$.next(true);
isSignedIn$.next(true);
isSignedIn$.next(true);
