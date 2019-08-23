import { Component } from '@angular/core';
import { ActivationStart, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { CartQuery } from './cart/cart.query';
import { helpRouteHelper } from './help/help-route-helper';

@Component({
    selector: 'wt-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    appRouteHelper = helpRouteHelper;

    totalPrice$ = this._cartQuery.totalPrice$;

    constructor(
        private _cartQuery: CartQuery,
        private _router: Router,
    ) {

        this._router.events
            .pipe(
                filter(e => e instanceof ActivationStart),
                map((e: ActivationStart) => e.snapshot.params.lang)
            )
            .subscribe(console.log);

    }

}
