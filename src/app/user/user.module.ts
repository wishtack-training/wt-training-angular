/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormReactiveComponent } from './user-form-reactive/user-form-reactive.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserPreviewComponent } from './user-preview/user-preview.component';
import { UserStore } from './user-store';

@NgModule({
    declarations: [
        UserPreviewComponent,
        UserFormComponent,
        UserFormReactiveComponent
    ],
    exports: [
        UserPreviewComponent,
        UserFormComponent,
        UserFormReactiveComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        UserStore
    ]
})
export class UserModule {

}
