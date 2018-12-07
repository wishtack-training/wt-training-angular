import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@NgModule({
    declarations: [
        DemoComponent
    ],
    exports: [
        DemoComponent
    ],
    imports: [
        CommonModule
    ]
})
export class DemoModule {
}
