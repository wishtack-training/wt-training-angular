/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import {
    ComponentFactory,
    ComponentFactoryResolver,
    Inject,
    Injectable,
    Injector, NgModuleFactory,
    NgModuleFactoryLoader
} from '@angular/core';
import { ComponentType } from '@angular/core/src/render3';
import { defer, Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import { DynamicComponentManifest } from './dynamic-component-manifest';
import { DYNAMIC_COMPONENT_MANIFESTS } from './dynamic-component-manifests';
import { DYNAMIC_COMPONENT_MAPPING } from './dynamic-component-mapping';

export interface ComponentRecipe {
    componentType: ComponentType<any>;
    ngModuleFactory: NgModuleFactory<any>;
}

@Injectable({
    providedIn: 'root'
})
export class DynamicComponentLoader {

    constructor(
        @Inject(DYNAMIC_COMPONENT_MANIFESTS) private _manifestList: DynamicComponentManifest[],
        private _injector: Injector,
        private _componentFactoryResolver: ComponentFactoryResolver,
        private _ngModuleFactoryloader: NgModuleFactoryLoader
    ) {
    }

    getComponentFactory<T>(componentId: string, injector?: Injector): Observable<ComponentRecipe> {

        return defer(() => {

            const manifest = this._manifestList
                .find(_manifest => _manifest.componentId === componentId);

            const p = this._ngModuleFactoryloader.load(manifest.loadChildren)
                .then(ngModuleFactory => {

                    const moduleRef = ngModuleFactory.create(injector || this._injector);

                    // Read from the moduleRef injector and locate the dynamic component type
                    const componentType = moduleRef.injector.get(DYNAMIC_COMPONENT_MAPPING)[componentId];

                    return {
                        ngModuleFactory,
                        componentType
                    };

                });

            return fromPromise(p as Promise<ComponentRecipe>);

        });

    }
}
