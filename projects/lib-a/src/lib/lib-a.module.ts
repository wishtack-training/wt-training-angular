import { NgModule } from '@angular/core';
import { LibBModule } from 'lib-b';
import { LibAComponent } from './lib-a.component';

@NgModule({
    imports: [
        LibBModule
    ],
    declarations: [LibAComponent],
    exports: [LibAComponent]
})
export class LibAModule {
}
