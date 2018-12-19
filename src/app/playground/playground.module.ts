import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import { CityPreviewComponent } from './city-preview/city-preview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DemoComponent } from './demo/demo.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
    declarations: [
        CityPreviewComponent,
        DashboardComponent,
        DemoComponent,
        NavComponent
    ],
    exports: [
        CityPreviewComponent,
        DashboardComponent,
        DemoComponent,
        NavComponent
    ],
    imports: [
        CommonModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        ReactiveFormsModule
    ]
})
export class PlaygroundModule {
}
