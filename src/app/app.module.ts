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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartDetailComponent } from './cart/cart-detail/cart-detail.component';
import { CityInfoPreviewComponent } from './city-info-preview/city-info-preview.component';
import { DemoComponent } from './demo/demo.component';
import { NavComponent } from './nav/nav.component';
import { SandwichCardComponent } from './sandwich-card/sandwich-card.component';
import { SandwichFormComponent } from './sandwich-form/sandwich-form.component';
import { SandwichListComponent } from './sandwich-list/sandwich-list.component';
import { SandwichPreviewComponent } from './sandwich-preview/sandwich-preview.component';
import { SandwichSearchComponent } from './sandwich-search/sandwich-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CartDetailComponent,
    DemoComponent,
    CityInfoPreviewComponent,
    SandwichFormComponent,
    SandwichPreviewComponent,
    SandwichListComponent,
    SandwichSearchComponent,
    SandwichCardComponent,
    NavComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
