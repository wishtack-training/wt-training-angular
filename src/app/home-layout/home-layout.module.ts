import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { HomeLayoutComponent } from './home-layout/home-layout.component';

@NgModule({
    declarations: [
        HomeLayoutComponent
    ],
    exports: [
        HomeLayoutComponent
    ],
    imports: [
        CommonModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule
    ]
})
export class HomeLayoutModule {
}
