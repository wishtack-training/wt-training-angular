import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookSearchModule } from '../../book-search/book-search.module';
import { SharedModule } from '../../shared/shared.module';
import { bookRouteResolver } from './book-route-resolver';
import { BookSearchViewComponent } from './book-search-view/book-search-view.component';

export const bookRoutes = [
    {
        path: bookRouteResolver.SEARCH_PATH,
        component: BookSearchViewComponent
    }
];

@NgModule({
    declarations: [
        BookSearchViewComponent
    ],
    imports: [
        BookSearchModule,
        RouterModule.forChild(bookRoutes),
        SharedModule
    ]
})
export class BookViewsModule {
}
