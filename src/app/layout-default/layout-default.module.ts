import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { LayoutDefaultComponent } from './layout-default/layout-default.component';

@NgModule({
    declarations: [
        LayoutDefaultComponent
    ],
    exports: [
        LayoutDefaultComponent
    ],
    imports: [
        CommonModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule
    ]
})
export class LayoutDefaultModule {
}
