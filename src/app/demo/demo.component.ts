import { Component } from '@angular/core';

@Component({
    selector: 'wt-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss']
})
export class DemoComponent {

    mainSkill: string;
    skillList = [
        'Angular',
        'NestJS',
        'NodeJS'
    ];

    isSkillEnabled(skill: string) {
        return skill !== this.mainSkill;
    }

    selectSkill(skill: string) {
        this.mainSkill = skill;
    }
}
