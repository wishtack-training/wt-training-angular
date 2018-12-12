import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoComponent } from './demo/demo.component';
import { FormDemoComponent } from './form-demo/form-demo.component';

@NgModule({
    declarations: [
        DemoComponent,
        FormDemoComponent
    ],
    exports: [
        DemoComponent,
        FormDemoComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class PlaygroundModule {
}
