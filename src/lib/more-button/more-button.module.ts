import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoreButtonComponent } from './more-button/more-button.component';

@NgModule({
    declarations: [
        MoreButtonComponent
    ],
    exports: [
        MoreButtonComponent
    ],
    imports: [
        CommonModule
    ]
})
export class MoreButtonModule {
}
