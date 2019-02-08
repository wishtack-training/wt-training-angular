import { interval } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { map } from 'rxjs/operators';

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

const city$ = interval(3000)
    .pipe(
        map(value => {
            return ['Luxembourg', 'Lyon', 'Paris'][value % 3];
        })
    );


city$
    .pipe(
        switchMap(city => getTemperature(city))
    )
    .subscribe(console.log);
