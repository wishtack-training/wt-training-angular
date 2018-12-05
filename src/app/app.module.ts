import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { BookListContainerComponent } from './book/book-list-container/book-list-container.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { DemoComponent } from './demo/demo/demo.component';

@NgModule({
    declarations: [
        AppComponent,
        DemoComponent,
        BookListContainerComponent,
        BookListComponent,
        BookFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
