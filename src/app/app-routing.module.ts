import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing/landing.component';

export const appRoutes: Routes = [
    {
        path: 'book',
        loadChildren: './views/book-routing/book-routing.module#BookRoutingModule'
    },
    {
        path: 'landing',
        component: LandingComponent
    },
    {
        path: '**',
        redirectTo: 'landing'
    }
];

@NgModule({
    imports: [
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
