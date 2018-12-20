import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorFormComponent } from './author-form/author-form.component';

@NgModule({
    declarations: [
        AuthorFormComponent
    ],
    exports: [
        AuthorFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class AuthorModule {
}
