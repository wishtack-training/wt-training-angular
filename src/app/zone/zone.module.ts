import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RecordModule } from '../record/record.module';
import { ZoneDetailComponent } from './zone-detail/zone-detail.component';

@NgModule({
    declarations: [
        ZoneDetailComponent
    ],
    exports: [
        ZoneDetailComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RecordModule
    ]
})
export class ZoneModule {
}
