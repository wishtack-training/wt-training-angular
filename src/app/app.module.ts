import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatListModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        ReactiveFormsModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
