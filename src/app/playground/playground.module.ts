import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoComponent } from './demo/demo.component';
import { LikeButtonComponent } from './like-button/like-button.component';

@NgModule({
    declarations: [
        DemoComponent,
        LikeButtonComponent
    ],
    exports: [
        DemoComponent,
        LikeButtonComponent
    ],
    imports: [
        CommonModule
    ]
})
export class PlaygroundModule {

}
