import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DemoModule } from './demo/demo.module';
import { DemoComponent } from './demo/demo/demo.component';

export const routes: Routes = [
    {
        path: 'demo',
        component: DemoComponent
    },
    {
        path: 'zone',
        /* @todo: use a view module. */
        loadChildren: './zone/zone.module#ZoneModule'
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
        BrowserAnimationsModule,
        BrowserModule,
        DemoModule,
        HttpClientModule,
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules
        })
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
