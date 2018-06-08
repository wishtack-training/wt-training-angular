import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookSearchComponent } from './book/book-list/book-search.component';
import { LandingComponent } from './landing/landing/landing.component';

export const appRoutes: Routes = [
    {
        path: 'books',
        component: BookSearchComponent
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
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
