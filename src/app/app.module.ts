import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { BookRepository } from './book/book-repository';
import { BookSearchComponent } from './book/book-search/book-search.component';
import { DemoComponent } from './demo/demo.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserPreviewComponent } from './user/user-preview/user-preview.component';
import { UserStore } from './user/user-store';
import { BookPreviewComponent } from './book/book-preview/book-preview.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';


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
        BrowserAnimationsModule,
        FlexLayoutModule,
        FormsModule,
        HttpClientModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatToolbarModule,
        ReactiveFormsModule,
        StoreModule.forRoot(reducers),
        !environment.production ? StoreDevtoolsModule.instrument() : []
    ],
    providers: [
        BookRepository,
        UserStore
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
