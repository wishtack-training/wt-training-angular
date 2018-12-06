import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookModule } from '../book/book.module';
import { CartComponent } from './cart/cart.component';

@NgModule({
    declarations: [
        CartComponent
    ],
    exports: [],
    imports: [
        BookModule,
        CommonModule
    ]
})
export class CartModule {

}
