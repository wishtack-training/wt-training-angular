import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartQuery } from '../../cart/cart.query';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

    cartSize$ = this._cartQuery.size$;

    constructor(private _cartQuery: CartQuery) {
    }

}
