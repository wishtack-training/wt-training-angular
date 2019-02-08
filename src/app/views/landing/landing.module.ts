import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { SharedModule } from '../../shared/shared.module';
import { LandingComponent } from './landing/landing.component';

@NgModule({
    declarations: [
        LandingComponent
    ],
    exports: [
        LandingComponent
    ],
    imports: [
        MatButtonModule,
        SharedModule
    ]
})
export class LandingModule {
}
