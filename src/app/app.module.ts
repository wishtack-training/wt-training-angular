import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodConstraintListComponent } from './group/food-constraint-list/food-constraint-list.component';
import { GroupEditorComponent } from './group/group-editor/group-editor.component';
import { PersonComponent } from './group/person/person.component';
import { HelloComponent } from './hello/hello.component';

@NgModule({
    declarations: [
        AppComponent,
        HelloComponent,
        GroupEditorComponent,
        FoodConstraintListComponent,
        PersonComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
