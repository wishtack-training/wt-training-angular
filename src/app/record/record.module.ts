import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';
import { RecordFormComponent } from './record-form/record-form.component';
import { RecordTableComponent } from './record-table/record-table.component';

@NgModule({
    declarations: [
        RecordFormComponent,
        RecordTableComponent
    ],
    exports: [
        RecordFormComponent,
        RecordTableComponent
    ],
    imports: [
        CommonModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        ReactiveFormsModule
    ]
})
export class RecordModule {
}
