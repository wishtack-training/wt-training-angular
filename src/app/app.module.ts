import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';
import { DemoComponent } from './demo/demo.component';
import { MealModule } from './meal/meal.module';

@NgModule({
    declarations: [
        AppComponent,
        DemoComponent
    ],
    imports: [
        BookModule,
        BrowserModule,
        MealModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
