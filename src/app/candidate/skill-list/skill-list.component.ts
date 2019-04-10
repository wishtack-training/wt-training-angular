import { Component, Input } from '@angular/core';
import { Skill } from '../skill-form/skill';

@Component({
    selector: 'wt-skill-list',
    templateUrl: './skill-list.component.html',
    styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent {

    @Input() skillList: Skill[];

}
