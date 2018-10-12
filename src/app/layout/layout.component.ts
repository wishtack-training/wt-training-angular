import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartService } from '../cart.service';

@Component({
    selector: 'wt-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );
    totalPrice$ = this._cartService.totalPrice$;

    constructor(
        private breakpointObserver: BreakpointObserver,
        private _cartService: CartService
    ) {
    }

}
