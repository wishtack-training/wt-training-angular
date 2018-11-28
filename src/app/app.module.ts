import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CityPreviewComponent } from './demo/city-preview/city-preview.component';
import { DemoComponent } from './demo/demo/demo.component';
import { ReactiveFormDemoComponent } from './demo/reactive-form-demo/reactive-form-demo.component';
import { RecordFormComponent } from './record/record-form/record-form.component';
import { RecordTableComponent } from './record/record-table/record-table.component';
import { ZoneDetailComponent } from './zone/zone-detail/zone-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        CityPreviewComponent,
        DemoComponent,
        ReactiveFormDemoComponent,
        RecordTableComponent,
        ZoneDetailComponent,
        RecordFormComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
