/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

'use strict';
//
const { BehaviorSubject, Observable } = require('rxjs');
//
//
// class StateStore {
//
//
//     constructor() {
//         this._subject$ = new BehaviorSubject({
//             city: 'paris'
//         });
//     }
//
//     get state$() {
//         return this._subject$.asObservable();
//     }
//
//     getCity() {
//         return this.state$
//             .take(1)
//             .map((state) => state.city)
//     }
//
//     setCity(city) {
//         this._updateState({
//             city: city
//         });
//     }
//
//     _updateState(state) {
//
//         state = Object.assign({}, this._subject$.getValue(), state);
//
//         this._subject$.next(state);
//     }
// }
//
// let stateStore = new StateStore();
//
//
// stateStore.state$
//     .map((state) => state.city)
//     .subscribe(console.log);
//
// // setter
//
// stateStore.setCity('luxembourg');
// stateStore.setCity('luxembourg');

let o1 = Observable.from(['A','B','C']);
let o2 = Observable.interval(1000).take(3);


o1.mergeMap(() => o2, (v1, v2) => `${v1}${v2}`).subscribe(console.log);