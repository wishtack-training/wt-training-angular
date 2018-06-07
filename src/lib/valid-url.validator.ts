import { ValidatorFn } from '@angular/forms';

export const validUrl: ValidatorFn = (control) => {

    if (control.value == null || control.value === '') {
        return null;
    }

    if (!control.value.startsWith('https://')) {
        return {
            validUrl: {
                url: control.value
            }
        };
    }

    return null;
};
