import { Compiler, Component, Injector, NgModuleRef, Type } from '@angular/core';

export type NgModuleRefWithBootstrapComponents = NgModuleRef<unknown> & {
    _bootstrapComponents: Type<unknown>[]
};

@Component({
    selector: 'wt-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    componentType: any;

    moduleLoader1 = () => import('./demo/demo.module').then(m => m.DemoModule);
    moduleLoader2 = () => import('./demo-2/demo.module').then(m => m.DemoModule);

    constructor(private _compiler: Compiler, private _injector: Injector) {
    }

    async load(moduleLoader) {
        const ngModule = await moduleLoader();
        const ngModuleFactory = this._compiler.compileModuleSync(ngModule);
        const ngModuleRef = ngModuleFactory.create(this._injector) as NgModuleRefWithBootstrapComponents;
        this.componentType = ngModuleRef._bootstrapComponents[0];
    }

}
