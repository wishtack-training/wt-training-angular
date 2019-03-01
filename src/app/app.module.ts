import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodConstraintListComponent } from './group/food-constraint-list/food-constraint-list.component';
import { GroupEditorComponent } from './group/group-editor/group-editor.component';
import { PersonFormComponent } from './group/person-form/person-form.component';
import { PersonComponent } from './group/person/person.component';
import { HelloComponent } from './hello/hello.component';
import { RestaurantSearchComponent } from './restaurant/restaurant-search/restaurant-search.component';

@NgModule({
    declarations: [
        AppComponent,
        FoodConstraintListComponent,
        GroupEditorComponent,
        HelloComponent,
        PersonComponent,
        PersonFormComponent,
        RestaurantSearchComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
