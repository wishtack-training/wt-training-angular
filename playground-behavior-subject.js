/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

// <head>
//     <script src="legacy-communication.service.js">
// </head>
const { BehaviorSubject } = require('rxjs');

const subject = new BehaviorSubject({
    userId: null
});

subject.next({
    userId: 1
});

// Sender.
subject.next({
    userId: 2
});

// Receiver.
subject.subscribe(console.log);

subject.next({
    userId: 3
});
