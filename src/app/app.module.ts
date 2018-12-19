import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { CityPreviewComponent } from './playground/city-preview/city-preview.component';
import { DemoComponent } from './playground/demo/demo.component';

@NgModule({
    declarations: [
        AppComponent,
        DemoComponent,
        BookListComponent,
        CityPreviewComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
