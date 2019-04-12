import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { Skill } from '../skill-form/skill';

@Component({
    selector: 'wt-skill-list',
    templateUrl: './skill-list.component.html',
    styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent {

    @Input() skillList: Skill[];

}

@NgModule({
    declarations: [SkillListComponent],
    exports: [SkillListComponent],
    imports: [
        CommonModule
    ]
})
export class SkillListModule {

}
