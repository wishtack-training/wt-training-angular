import { NgModule } from '@angular/core';
import { LibAComponent } from './lib-a.component';
import { LibBModule } from 'lib-b';

@NgModule({
    imports: [
        LibBModule
    ],
    declarations: [LibAComponent],
    exports: [LibAComponent]
})
export class LibAModule {
}
