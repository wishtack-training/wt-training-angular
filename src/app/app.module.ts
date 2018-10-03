import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { MealModule } from './meal/meal.module';

@NgModule({
    declarations: [
        AppComponent,
        DemoComponent
    ],
    imports: [
        BrowserModule,
        MealModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
