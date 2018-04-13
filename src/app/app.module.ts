import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { DemoComponent } from './demo/demo/demo.component';
import { BookSearchComponent } from './book/book-search/book-search.component';
import { BookPreviewComponent } from './book/book-preview/book-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    BookSearchComponent,
    BookPreviewComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
