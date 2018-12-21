import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: SharedModule.MODULE_LIST,
    exports: SharedModule.MODULE_LIST
})
export class SharedModule {

    static readonly MODULE_LIST = [
        CommonModule,
        FlexLayoutModule,
        RouterModule
    ];

}
