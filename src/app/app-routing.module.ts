import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CartDetailComponent } from './cart/cart-detail/cart-detail.component';
import { SandwichSearchComponent } from './sandwich/sandwich-search/sandwich-search.component';

const routes: Routes = [
    {
        path: 'cart',
        component: CartDetailComponent
    },
    {
        path: 'search',
        component: SandwichSearchComponent
    },
    {
        path: '**',
        redirectTo: 'search'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
