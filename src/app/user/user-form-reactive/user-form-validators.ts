/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { FormControl, ValidatorFn } from '@angular/forms';


export const startsWithTgi: ValidatorFn = (control: FormControl) => {

    if (control.value == null || !control.value.startsWith('TGI')) {
        return {
            'startswithtgi': true
        }
    }

    return null;

};

export const cobolConstraint = (control) => {

    let {firstName, lastName} = control.value;

    firstName = firstName || '';
    lastName = lastName || '';

    if (firstName.length + lastName.length > 10) {
        return {
            'systemmaxstringsizereached': true
        };
    }

    return null;

};