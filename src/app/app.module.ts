import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookSearchComponent } from './book/book-search/book-search.component';
import { BookModule } from './book/book.module';

export const appRoutes: Routes = [
    {
        path: 'search',
        component: BookSearchComponent
    },
    {
        path: 'list',
        component: BookListComponent
    },
    {
        path: 'book-detail/:bookId',
        component: BookDetailComponent
    },
    {
        path: '**',
        redirectTo: 'search'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BookModule,
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
