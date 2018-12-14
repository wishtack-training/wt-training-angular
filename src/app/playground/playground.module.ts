import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BookCommonModule } from '../book-common/book-common.module';
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
        BookCommonModule,
        CommonModule,
        ReactiveFormsModule
    ]
})
export class PlaygroundModule {
}
