/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

'use strict';

const { Observable } = require('rxjs');

const obs$ = Observable.interval(1000);

formGroup
    .valueChanges
    .debounceTime(100)
    .mergeMap(keywords => http.get(`/?${keywords}`).retry(3))
    .subscribe(results => {
        this.results = results
    });
const subscription = obs$
    .take(5)
    .map(value => value * 2)
    .map(value => {

        if (value > 2) {
            throw new Error('test');
        }

        return value;

    })
    .retry(3)
    .subscribe(
        (value) => console.log(value),
        (error) => console.log('error'),
        () => console.log('complete')
);

