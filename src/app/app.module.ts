import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookListContainerComponent } from './book/book-list-container/book-list-container.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookPreviewComponent } from './book/book-preview/book-preview.component';
import { CityPreviewComponent } from './playground/city-preview/city-preview.component';
import { DemoComponent } from './playground/demo/demo.component';

@NgModule({
    declarations: [
        AppComponent,
        DemoComponent,
        BookListContainerComponent,
        CityPreviewComponent,
        BookListComponent,
        BookPreviewComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
