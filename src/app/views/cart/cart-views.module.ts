import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartModule } from '../../cart/cart.module';
import { CartComponent } from '../../cart/cart/cart.component';

export const routes: Routes = [
    {
        path: '',
        component: CartComponent
    }
];

@NgModule({
    imports: [
        CartModule,
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class CartViewsModule {
}
