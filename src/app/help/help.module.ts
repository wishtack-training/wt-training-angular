import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './help.component';

export const helpRoutes: Routes = [
    {
        path: ':topic',
        component: HelpComponent
    }
];

@NgModule({
    declarations: [
        HelpComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(helpRoutes)
    ]
})
export class HelpModule {

}
