import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { persistState } from '@datorama/akita';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartStatsComponent } from './cart/cart-stats/cart-stats.component';
import { NavModule } from './nav/nav.component';

persistState();

@NgModule({
  declarations: [AppComponent, CartStatsComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NavModule,
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
