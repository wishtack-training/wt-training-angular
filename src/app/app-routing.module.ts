import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'book',
        loadChildren: './views/book/book-views.module#BookViewsModule'
    },
    {
        path: 'cart',
        loadChildren: './views/cart/cart-views.module#CartViewsModule'
    },
    {
        path: '**',
        redirectTo: 'cart'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules
        })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
