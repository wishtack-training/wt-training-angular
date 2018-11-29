import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordModule } from '../record/record.module';
import { ZoneDetailComponent } from './zone-detail/zone-detail.component';


const routes: Routes = [
    {
        path: '',
        component: ZoneDetailComponent
    }
];

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
        RecordModule,
        /* @todo: this should be done in a view module! */
        RouterModule.forChild(routes)
    ]
})
export class ZoneModule {
}
