import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { BookRepository } from './book/book-repository';
import { BookSearchComponent } from './book/book-search/book-search.component';
import { BookModule } from './book/book.module';
import { DemoComponent } from './demo/demo.component';
import { reducers } from './reducers';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserPreviewComponent } from './user/user-preview/user-preview.component';
import { UserStore } from './user/user-store';

export const routes: Routes = [
    {
        path: 'users',
        component: UserListComponent
    },
    {
        path: 'books',
        component: BookSearchComponent
    },
    {
        path: '**',
        redirectTo: 'users'
    }
];


@NgModule({
    declarations: [
        AppComponent,
        DemoComponent,
        UserListComponent,
        UserFormComponent,
        UserPreviewComponent,
        ToolbarComponent
    ],
    imports: [
        BookModule,
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        FormsModule,
        HttpClientModule,
        MatToolbarModule,
        ReactiveFormsModule,
        /* @TODO: Move this to AppRoutingModule. */
        RouterModule.forRoot(routes),
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
