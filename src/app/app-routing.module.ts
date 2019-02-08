import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { bookRouteResolver } from './views/book-views/book-route-resolver';
import { LandingModule } from './views/landing/landing.module';
import { LandingComponent } from './views/landing/landing/landing.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingComponent
    },
    {
        path: bookRouteResolver.BASE_PATH,
        loadChildren: './views/book-views/book-views.module#BookViewsModule'
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        LandingModule,
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
