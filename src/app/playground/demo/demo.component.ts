import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Scavenger } from '@wishtack/rx-scavenger';
import { Subscription } from 'rxjs';
import { map, pairwise } from 'rxjs/operators';
import { CartQuery } from '../../cart/cart.query';
import { SessionService } from '../../session/session.service';

@Component({
    selector: 'wt-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnDestroy, OnInit {

    bookList$ = this._cartQuery.bookList$;
    totalPrice$ = this._cartQuery.totalPrice$;

    cityList = [
        'Dijon',
        'Lyon'
    ];

    title = 'Hello!';

    keywordsControl = new FormControl();

    isSignedIn$ = this._sessionService.isSignedIn$;

    private _subscription: Subscription;
    private _scavenger = new Scavenger(this);

    constructor(
        private _cartQuery: CartQuery,
        private _httpClient: HttpClient,
        private _sessionService: SessionService
    ) {
    }

    ngOnInit() {

        this.keywordsControl.valueChanges
            .pipe(
                pairwise(),
                map(([previous, current]) => {
                    return current.length - previous.length;
                }),
                this._scavenger.collect()
            )
            .subscribe(data => console.log(data));

        // const data$ = interval(100)
        //     .pipe(
        //         map(data => data % 10),
        //         filter(data => data !== 0),
        //         bufferTime(500),
        //         tap(data => {
        //             if (data[0] === 4) {
        //                 throw new Error('test');
        //             }
        //         })
        //     );
        //
        // const subscription = data$
        //     .pipe(
        //         retry(2)
        //     )
        //     .subscribe({
        //         next: data => console.log(data),
        //         error: err => console.log('Something went wrong'),
        //         complete: () => {
        //             console.log('DONE');
        //         }
        //     });
        //
        // setTimeout(() => subscription.unsubscribe(), 2000);

        // try {
        //
        //     const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=eXtreme%20Programming');
        //
        //     const data = await response.json();
        //
        //     console.log(data);
        //
        // } catch (e) {
        //     console.log('ERROR');
        // }

        // function wait(duration) {
        //     return new Promise(resolve => {
        //        setTimeout(resolve, duration);
        //     });
        // }
        //
        // await wait(1000);

        // fetch('https://www.googleapis.com/books/v1/volumes?q=eXtreme%20Programming')
        //     .then(response => {
        //         return response.json();
        //     })
        //     .then(data => {
        //         console.log(data);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });

    }

    ngOnDestroy() {
    }

    signIn() {
        this._sessionService.setUserId('USER_ID');
    }

    signOut() {
        this._sessionService.signOut();
    }

}
