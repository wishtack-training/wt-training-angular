import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { BookListContainerModule } from './book-list-container/book-list-container.module';
import { BookSearchModule } from './book-search/book-search.module';
import { PlaygroundModule } from './playground/playground.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BookListContainerModule,
        BookSearchModule,
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        PlaygroundModule,
        ReactiveFormsModule,
        environment.production ?
            [] :
            [
                AkitaNgDevtools.forRoot(),
                // AkitaNgRouterStoreModule.forRoot()
            ]
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
