import { ValidatorFn } from '@angular/forms';

export interface RangeError {
    range: {
        reason: 'tooLow',
        currentValue: number,
        minValue: number
    } | {
        reason: 'tooHigh',
        currentValue: number,
        maxValue: number
    };
}

/**
 * @returns an error object like {range: {...}}
 */
export const rangeValidator = (minValue: number, maxValue: number): ValidatorFn => {

    return (control): RangeError => {

        if (control.value == null) {
            return null;
        }

        if (control.value < minValue) {
            return {
                range: {
                    reason: 'tooLow',
                    currentValue: control.value,
                    minValue
                }
            };
        }

        if (control.value > maxValue) {
            return {
                range: {
                    reason: 'tooHigh',
                    currentValue: control.value,
                    maxValue
                }
            };
        }

        return null;

    };
};
