/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

const {Observable} = require('rxjs');

const data$ = Observable.interval(500);

const selection$ = data$
    .do((value) => console.log(`producing... ${value}`))
    .take(5);

selection$
    .subscribe(data => console.log(data));

