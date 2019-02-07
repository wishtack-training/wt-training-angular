import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CartComponent } from './cart/cart.component';

@NgModule({
    declarations: [
        CartComponent
    ],
    exports: [
        CartComponent
    ],
    imports: [
        CommonModule
    ]
})
export class CartModule {
}
