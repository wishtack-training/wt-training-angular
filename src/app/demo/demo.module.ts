import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CityPreviewComponent } from './city-preview/city-preview.component';
import { DemoComponent } from './demo/demo.component';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';

@NgModule({
    declarations: [
        CityPreviewComponent,
        DemoComponent,
        ReactiveFormDemoComponent
    ],
    exports: [
        CityPreviewComponent,
        DemoComponent,
        ReactiveFormDemoComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class DemoModule {
}
