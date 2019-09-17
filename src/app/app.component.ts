import { NgModuleAnalysis } from '@angular/compiler-cli/src/ngtsc/annotations/src/ng_module';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'wt-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'training';
    type: any;
    ngModuleFactory: any;

    constructor(private _viewContainerRef: ViewContainerRef) {
    }

    async load() {
        const module = await import('./demo/demo.module');
        const ngModule = module.DemoModule as unknown as NgModuleAnalysis;
        // console.dir(ngModule);
        console.log(ngModule.ngInjectorDef.factory());
        this.type = ngModule.ngModuleDef.declarations[0];
        console.dir(this.type);
        this._viewContainerRef.createComponent(this.type.ngComponentDef.factory);
    }


}
