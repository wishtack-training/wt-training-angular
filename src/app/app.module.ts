import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { DemoComponent } from './demo/demo.component';
import { LikeButtonComponent } from './like/like-button/like-button.component';
import { BookPreviewComponent } from './book/book-preview/book-preview.component';
import { BookFormComponent } from './book/book-form/book-form.component';

@NgModule({
    declarations: [
        AppComponent,
        BookListComponent,
        DemoComponent,
        LikeButtonComponent,
        BookPreviewComponent,
        BookFormComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
