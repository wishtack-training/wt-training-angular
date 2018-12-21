/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookCommonModule } from '../book-comon/book-common.module';
import { CartComponent } from './cart/cart.component';

@NgModule({
    declarations: [
        CartComponent
    ],
    exports: [
        CartComponent
    ],
    imports: [
        BookCommonModule,
        CommonModule
    ]
})
export class CartModule {

}

