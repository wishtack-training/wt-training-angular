/**
 *
 * (c) 2013-2019 Wishtack
 *
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSliderModule
} from '@angular/material';
import { SandwichFormComponent } from './sandwich-form/sandwich-form.component';
import { SandwichGalleryComponent } from './sandwich-gallery/sandwich-gallery.component';
import { SandwichPreviewComponent } from './sandwich-preview/sandwich-preview.component';
import { SandwichSearchComponent } from './sandwich-search/sandwich-search.component';

@NgModule({
    declarations: [
        SandwichFormComponent,
        SandwichGalleryComponent,
        SandwichPreviewComponent,
        SandwichSearchComponent
    ],
    exports: [
        SandwichFormComponent,
        SandwichGalleryComponent,
        SandwichPreviewComponent,
        SandwichSearchComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatListModule,
        MatSelectModule,
        MatSliderModule,
        ReactiveFormsModule
    ]
})
export class SandwichModule {

}
