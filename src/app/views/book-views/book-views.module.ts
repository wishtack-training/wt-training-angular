import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCommonModule } from '../../book-comon/book-common.module';
import { BookSearchModule } from '../../book-search/book-search.module';
import { CartModule } from '../../cart/cart.module';
import { CartComponent } from '../../cart/cart/cart.component';
import { SharedFormsModule } from '../../shared-forms/shared-forms.module';
import { BookSearchViewComponent } from './book-search-view/book-search-view.component';

const bookRoutes: Routes = [
    {
        path: 'search',
        component: BookSearchViewComponent
    },
    {
        path: 'cart',
        component: CartComponent
    }
];

@NgModule({
    declarations: [
        BookSearchViewComponent
    ],
    exports: [
        BookSearchViewComponent
    ],
    imports: [
        BookCommonModule,
        CartModule,
        CommonModule,
        CommonModule,
        RouterModule.forChild(bookRoutes),
        SharedFormsModule
    ]
})
export class BookViewsModule {
}
