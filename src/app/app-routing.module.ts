import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LandingModule } from './landing/landing.module';
import { LandingComponent } from './landing/landing/landing.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'book',
        loadChildren: './views/book/book-views.module#BookViewsModule'
    },
    {
        path: '**',
        redirectTo: 'book'
    }
];

@NgModule({
    imports: [
        CommonModule,
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
