import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AuthorFormComponent } from './author-form/author-form.component';

@NgModule({
    declarations: [
        AuthorFormComponent
    ],
    exports: [
        AuthorFormComponent
    ],
    imports: [
        ReactiveFormsModule,
        SharedModule
    ]
})
export class AuthorModule {
}
