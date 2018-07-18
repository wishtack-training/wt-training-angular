/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { ModuleWithProviders, NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { ROUTES } from '@angular/router';
import { DynamicComponentManifest } from './dynamic-component-manifest';
import { DYNAMIC_COMPONENT_MANIFESTS } from './dynamic-component-manifests';

@NgModule({
    declarations: [],
    exports: []
})
export class DynamicComponentLoaderModule {

    static forRoot(manifestList: DynamicComponentManifest[]): ModuleWithProviders {
        return {
            ngModule: DynamicComponentLoaderModule,
            providers: [
                // provider for Angular CLI to analyze
                {
                    provide: ROUTES,
                    useValue: manifestList,
                    multi: true
                },
                {
                    provide: DYNAMIC_COMPONENT_MANIFESTS,
                    useValue: manifestList
                },
                {
                    provide: NgModuleFactoryLoader,
                    useClass: SystemJsNgModuleLoader
                }
            ],
        };
    }

}
