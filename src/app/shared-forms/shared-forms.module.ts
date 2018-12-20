import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
    imports: SharedFormsModule.MODULE_LIST,
    exports: SharedFormsModule.MODULE_LIST
})
export class SharedFormsModule {

    static readonly MODULE_LIST = [
        CommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
    ];

}
