import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BookRepository } from './book/book-repository';
import { BookSearchComponent } from './book/book-search/book-search.component';
import { DemoComponent } from './demo/demo.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserPreviewComponent } from './user/user-preview/user-preview.component';
import { UserStore } from './user/user-store';
import { BookPreviewComponent } from './book/book-preview/book-preview.component';


@NgModule({
    declarations: [
        AppComponent,
        DemoComponent,
        UserListComponent,
        UserFormComponent,
        UserPreviewComponent,
        BookSearchComponent,
        BookPreviewComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [
        BookRepository,
        UserStore
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
