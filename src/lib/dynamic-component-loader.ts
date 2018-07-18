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
    Injector,
    NgModuleFactoryLoader
} from '@angular/core';
import { defer, Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import { DynamicComponentManifest } from './dynamic-component-manifest';
import { DYNAMIC_COMPONENT_MANIFESTS } from './dynamic-component-manifests';
import { DYNAMIC_COMPONENT_MAPPING } from './dynamic-component-mapping';

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

    getComponentFactory<T>(componentId: string, injector?: Injector): Observable<ComponentFactory<T>> {

        return defer(() => {

            const manifest = this._manifestList
                .find(_manifest => _manifest.componentId === componentId);

            const p = this._ngModuleFactoryloader.load(manifest.loadChildren)
                .then(ngModuleFactory => {
                    const moduleRef = ngModuleFactory.create(injector || this._injector);

                    // Read from the moduleRef injector and locate the dynamic component type
                    const componentType = moduleRef.injector.get(DYNAMIC_COMPONENT_MAPPING)[componentId];

                    // Resolve this component factory
                    const componentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory<T>(componentType);

                    /* @HACK: Add component factory to component factory resolver. */
                    this._componentFactoryResolver['_factories'].set(componentType, componentFactory);

                    return componentFactory;

                });

            return fromPromise(p as Promise<ComponentFactory<T>>);

        });


    }
}
