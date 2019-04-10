import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'wt-skill-form',
    templateUrl: './skill-form.component.html',
    styleUrls: ['./skill-form.component.scss']
})
export class SkillFormComponent {

    @Input() skillFormGroup: FormGroup;

    static createSkillFormGroup() {
        return new FormGroup({
            name: new FormControl(null, [
                Validators.required
            ]),
            level: new FormControl(null, [
                Validators.min(0),
                Validators.max(5)
            ])
        });
    }

    get nameControl() {
        return this.skillFormGroup.get('name');
    }

}
