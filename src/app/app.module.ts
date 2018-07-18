import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DynamicComponentLoaderModule } from '../lib/dynamic-component-loader.module';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        DynamicComponentLoaderModule.forRoot([
            {
                componentId: 'transactions',
                path: 'bank-a-transactions',
                loadChildren: './bank-a/bank-a.module#BankAModule'
            }
        ])
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
