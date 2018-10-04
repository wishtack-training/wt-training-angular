import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MoreButtonModule } from '../../lib/more-button/more-button.module';
import { MealListComponent } from './meal-list/meal-list.component';
import { MealPreviewComponent } from './meal-preview/meal-preview.component';
import { MealFormComponent } from './meal-form/meal-form.component';

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
        CommonModule,
        MoreButtonModule,
        ReactiveFormsModule
    ]
})
export class MealModule {
}
