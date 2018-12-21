import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartService } from '../../cart/cart.service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

    cartSize$ = this._cart.size$;

    constructor(private _cart: CartService) {
    }

}
