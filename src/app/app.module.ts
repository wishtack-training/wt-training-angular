import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupEditorComponent } from './group/group-editor/group-editor.component';
import { HelloComponent } from './hello/hello.component';

@NgModule({
    declarations: [
        AppComponent,
        HelloComponent,
        GroupEditorComponent
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
