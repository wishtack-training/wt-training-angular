import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';

export const cartRoutes = [
  {
    path: '',
    component: CartComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(cartRoutes)
  ]
})
export class CartViewsModule {
}
