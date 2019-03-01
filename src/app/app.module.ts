import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodConstraintListComponent } from './group/food-constraint-list/food-constraint-list.component';
import { GroupEditorComponent } from './group/group-editor/group-editor.component';
import { PersonFormComponent } from './group/person-form/person-form.component';
import { PersonComponent } from './group/person/person.component';
import { HelloComponent } from './hello/hello.component';

@NgModule({
    declarations: [
        AppComponent,
        FoodConstraintListComponent,
        GroupEditorComponent,
        HelloComponent,
        PersonComponent,
        PersonFormComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
