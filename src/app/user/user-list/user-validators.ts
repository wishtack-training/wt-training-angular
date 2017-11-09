/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */
import { AbstractControl, ValidatorFn } from '@angular/forms';


export const isValidPrefix = (prefix) => (control: AbstractControl) => {

    if (control.value == null) {
        return {
            invalidPrefix: {
                isEmpty: true
            }
        };
    }

    if (!control.value.startsWith(prefix)) {
        return {
            invalidPrefix: true
        };
    }

    return null;

};

export const isValidTgi: ValidatorFn = isValidPrefix('TGI');




