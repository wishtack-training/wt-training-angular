import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { BookPreviewComponent } from './book/book-preview/book-preview.component';
import { BookSearchComponent } from './book/book-search/book-search.component';
import { DemoComponent } from './demo/demo/demo.component';

@NgModule({
    declarations: [
        AppComponent,
        DemoComponent,
        BookSearchComponent,
        BookPreviewComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
