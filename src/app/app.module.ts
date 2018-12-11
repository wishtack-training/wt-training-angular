import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './playground/demo/demo.component';
import { FormDemoComponent } from './playground/form-demo/form-demo.component';

@NgModule({
    declarations: [
        AppComponent,
        DemoComponent,
        FormDemoComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
