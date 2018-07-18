import { InjectionToken } from '@angular/core';
import { DynamicComponentManifest } from './dynamic-component-manifest';

export const DYNAMIC_COMPONENT_MANIFESTS = new InjectionToken<DynamicComponentManifest[]>('DYNAMIC_COMPONENT_MANIFESTS');
