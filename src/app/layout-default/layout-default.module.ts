import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { LayoutDefaultComponent } from './layout-default/layout-default.component';

@NgModule({
    declarations: [LayoutDefaultComponent],
    imports: [
        CommonModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        SharedModule
    ],
    exports: [LayoutDefaultComponent]
})
export class LayoutDefaultModule {
}
