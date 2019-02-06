import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CityPreviewComponent } from './city-preview/city-preview.component';
import { DemoComponent } from './demo/demo.component';
import { FormDemoComponent } from './form-demo/form-demo.component';

@NgModule({
    declarations: [
        CityPreviewComponent,
        DemoComponent,
        FormDemoComponent
    ],
    exports: [
        CityPreviewComponent,
        DemoComponent,
        FormDemoComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class DemoModule {
}
