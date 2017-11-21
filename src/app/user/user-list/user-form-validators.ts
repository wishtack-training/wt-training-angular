/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */
import { ValidatorFn } from '@angular/forms';

export const startsWithWt: ValidatorFn = (control) => {

    if (control.value == null || !control.value.startsWith('wt')) {
        return {
            startswithwt: true
        };
    }

    return null;

};
