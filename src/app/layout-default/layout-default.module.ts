import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { LayoutDefaultComponent } from './layout-default/layout-default.component';

@NgModule({
    declarations: [
        LayoutDefaultComponent
    ],
    exports: [
        LayoutDefaultComponent
    ],
    imports: [
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        SharedModule
    ]
})
export class LayoutDefaultModule {
}
