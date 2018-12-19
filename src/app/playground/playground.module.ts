import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CityPreviewComponent } from './city-preview/city-preview.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
    declarations: [
        CityPreviewComponent,
        DemoComponent
    ],
    exports: [
        CityPreviewComponent,
        DemoComponent
    ],
    imports: [
        CommonModule
    ]
})
export class PlaygroundModule {
}
