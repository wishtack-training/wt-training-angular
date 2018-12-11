import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { BookListContainerComponent } from './book/book-list-container/book-list-container.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookPreviewComponent } from './book/book-preview/book-preview.component';
import { DemoComponent } from './playground/demo/demo.component';
import { FormDemoComponent } from './playground/form-demo/form-demo.component';

@NgModule({
    declarations: [
        AppComponent,
        DemoComponent,
        FormDemoComponent,
        BookListComponent,
        BookListContainerComponent,
        BookPreviewComponent,
        BookFormComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
