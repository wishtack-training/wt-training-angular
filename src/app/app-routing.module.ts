/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookSearchComponent } from './book-search/book-search/book-search.component';
import { CartComponent } from './cart/cart/cart.component';

export const routes: Routes = [
    {
        path: 'book',
        children: [
            {
                path: 'search',
                component: BookSearchComponent
            },
            {
                path: 'cart',
                component: CartComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/book/search'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
