import { CommonModule } from '@angular/common';
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
        RecordModule
    ]
})
export class ZoneModule {
}
