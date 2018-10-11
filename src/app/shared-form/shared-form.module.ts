import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
    exports: SharedFormModule.MODULE_LIST,
    imports: SharedFormModule.MODULE_LIST
})
export class SharedFormModule {

    static readonly MODULE_LIST = [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
    ];

}
