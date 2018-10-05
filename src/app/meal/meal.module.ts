import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MoreButtonModule } from '../../lib/more-button/more-button.module';
import { SharedModule } from '../shared/shared.module';
import { MealFormComponent } from './meal-form/meal-form.component';
import { MealListComponent } from './meal-list/meal-list.component';
import { MealPreviewComponent } from './meal-preview/meal-preview.component';

@NgModule({
    declarations: [
        MealFormComponent,
        MealListComponent,
        MealPreviewComponent
    ],
    exports: [
        MealFormComponent,
        MealListComponent,
        MealPreviewComponent
    ],
    imports: [
        MoreButtonModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class MealModule {
}
