import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { BookListContainerModule } from './book-list-container/book-list-container.module';
import { BookSearchModule } from './book-search/book-search.module';
import { DemoComponent } from './playground/demo/demo.component';
import { FormDemoComponent } from './playground/form-demo/form-demo.component';
import { PlaygroundModule } from './playground/playground.module';

export const routes: Routes = [
    {
        path: 'demo',
        component: DemoComponent
    },
    {
        path: 'form',
        component: FormDemoComponent
    },
    {
        path: '**',
        redirectTo: 'demo'
    }
];

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
        RouterModule.forRoot(routes),
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
