import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorFormComponent } from './author-form/author-form.component';
import { FavoriteAuthorSelectorComponent } from './favorite-author-selector/favorite-author-selector.component';

@NgModule({
    declarations: [
        AuthorFormComponent,
        FavoriteAuthorSelectorComponent
    ],
    exports: [
        AuthorFormComponent,
        FavoriteAuthorSelectorComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class AuthorModule {
}
