import { Component } from '@angular/core';
import { Sandwich } from '../../cart/sandwich';

@Component({
    selector: 'wt-sandwich-preview',
    templateUrl: './sandwich-preview.component.html',
    styleUrls: ['./sandwich-preview.component.scss']
})
export class SandwichPreviewComponent {

    sandwich = new Sandwich({
        title: 'Burger',
        price: 10,
        ingredientList: [
            'Du gras',
            'Du pain'
        ]
    });
    isAlreadyBought = false;

    canBuy() {
        return this.sandwich.price != null;
    }

    buy() {
        this.isAlreadyBought = true;
    }

}
