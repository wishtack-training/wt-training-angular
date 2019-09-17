import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoComponent } from './demo.component';

@NgModule({
    declarations: [
        DemoComponent
    ],
    exports: [
        DemoComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class DemoModule {
}
