import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LandingComponent } from './landing/landing.component';

@NgModule({
    declarations: [LandingComponent],
    imports: [
        CommonModule
    ],
    exports: [LandingComponent]
})
export class LandingModule {
}
