/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */
import { InjectionToken, Type } from '@angular/core';

export const DYNAMIC_COMPONENT_MAPPING = new InjectionToken<{[k: string]: Type<any>}>('DYNAMIC_COMPONENT_MAPPING');
