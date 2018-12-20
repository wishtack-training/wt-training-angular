import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'wt-author-form',
    templateUrl: './author-form.component.html',
    styleUrls: ['./author-form.component.scss']
})
export class AuthorFormComponent {

    @Input() authorFormGroup: FormGroup;

}
