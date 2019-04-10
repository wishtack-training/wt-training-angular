import { FormGroup } from '@angular/forms';

/**
 * @hack Cf. https://github.com/angular/material2/issues/4190
 */
export function resetForm(formGroup: FormGroup) {

    formGroup.reset();

    for (const control of Object.values(formGroup.controls)) {
        control.setErrors(null);
        /* @todo maybe we should handle children like FormArray & FormGroup. */
    }

}
