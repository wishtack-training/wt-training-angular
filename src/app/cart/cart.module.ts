import { NgModule } from '@angular/core';
import { BookCommonModule } from '../book-common/book-common.module';
import { SharedModule } from '../shared/shared.module';
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
        SharedModule
    ]
})
export class CartModule {
}
