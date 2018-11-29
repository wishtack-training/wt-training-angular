import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DemoModule } from './demo/demo.module';
import { RecordFormComponent } from './record/record-form/record-form.component';
import { RecordTableComponent } from './record/record-table/record-table.component';
import { ZoneDetailComponent } from './zone/zone-detail/zone-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        RecordTableComponent,
        ZoneDetailComponent,
        RecordFormComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        DemoModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
