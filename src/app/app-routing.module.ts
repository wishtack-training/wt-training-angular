import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IsSignedInGuard } from './session/is-signed-in.guard';
import { mealRouteResolver } from './views/meal/meal-route-resolver';

export const appRoutes: Routes = [
    {
        path: 'book',
        loadChildren: './views/book/book-views.module#BookViewsModule'
    },
    {
        canActivate: [
            IsSignedInGuard
        ],
        path: mealRouteResolver.BASE_PATH,
        loadChildren: './views/meal/meal-views.module#MealViewsModule'
    },
    {
        path: '**',
        redirectTo: 'book'
    }
];

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes, {
            preloadingStrategy: PreloadAllModules
        })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
