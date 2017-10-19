import { FormControl, Validators } from '@angular/forms';

/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */



export const startsWithA = (control: FormControl) => {

    const result = Validators.required(control);

    if (result != null) {
        return result;
    }

    if (!control.value.startsWith('A')) {
        return {
            invalidContent: true
        };
    }

    return null;

};

export const fieldsDontMatch = (field1, field2) => (form) => {

    if (form.value[field1] === form.value[field2]) {
        return {
            fieldsMatch: true
        };
    }

    return null;

}
