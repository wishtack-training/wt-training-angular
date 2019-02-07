import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LandingComponent } from './landing/landing.component';

@NgModule({
    declarations: [
        LandingComponent
    ],
    exports: [
        LandingComponent
    ],
    imports: [
        CommonModule
    ]
})
export class LandingModule {
}
