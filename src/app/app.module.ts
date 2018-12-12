import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';
import { PlaygroundModule } from './playground/playground.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BookModule,
        BrowserAnimationsModule,
        BrowserModule,
        PlaygroundModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}