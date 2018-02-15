/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */
import { from } from 'rxjs/observable/from';
import 'rxjs/add/operator/take';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/filter';

const data$ = from([1, 2, 3]);

// infinite observables never trigger toPromise().then...
// const data$ = interval(1000);

const demo1 = () => {

    data$.subscribe(
        data => console.log(data),
        error => console.error(error),
        () => console.log('complete'));

    data$
        .toPromise()
        .then(data => console.log(data));

};


const demo2 = () => {

    data$.toPromise()
        .then((value) => {
            return value + 1;
        })
        .then(value => console.log(value))
        .catch(error => console.error(error));
};

const demo3 = async () => {

    let value = await data$.toPromise();

    // const resultList = await Promise.all([getData(0), getData(1)]);

    value += 1;

    return value * 2;

};

// demo3().then((value) => console.log(value));


const demo4 = () => {

    const subject = new BehaviorSubject(null);

    console.log(`getValue: ${subject.getValue()}`);

    subject.next(1);
    subject.next(2);

    subject
        .subscribe(console.log);

    subject.next(3);
    subject.next(4);


};

demo4();
