import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
    {
        path: 'search',
        loadChildren: './views/sandwich-search-view/sandwich-search-view.module#SandwichSearchViewModule'
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
