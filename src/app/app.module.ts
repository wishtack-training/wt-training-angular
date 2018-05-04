import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';


export const routes: Routes = [
    {
        path: 'demo',
        component: DemoComponent
    },
    {
        path: 'users',
        loadChildren: './views/user/user-routing.module#UserRoutingModule'
    },
    {
        path: '**',
        redirectTo: 'demo'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        DemoComponent
    ],
    imports: [
        BrowserModule,
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
