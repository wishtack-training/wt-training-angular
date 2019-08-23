import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';

import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { CartComponent } from './legacy-cart/cart.component';
import { NavComponent } from './nav/nav.component';
import { SandwichFormComponent } from './sandwich-form/sandwich-form.component';
import { SandwichPreviewComponent } from './sandwich-preview/sandwich-preview.component';
import { SandwichSearchComponent } from './sandwich-search/sandwich-search.component';

@NgModule({
    declarations: [
        AppComponent,
        DemoComponent,
        CartComponent,
        SandwichPreviewComponent,
        SandwichFormComponent,
        SandwichSearchComponent,
        NavComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules
        }),
        LayoutModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        environment.production ? [] : AkitaNgDevtools.forRoot(),
        AkitaNgRouterStoreModule.forRoot()
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
