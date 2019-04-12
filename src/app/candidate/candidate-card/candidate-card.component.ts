import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { Candidate } from '../candidate';
import { SkillListModule } from '../skill-list/skill-list.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-candidate-card',
    templateUrl: './candidate-card.component.html',
    styleUrls: ['./candidate-card.component.scss']
})
export class CandidateCardComponent {

    @Input() candidate: Candidate;

    /**
     * @todo this should be in `Candidate.pictureUri`.
     */
    getPictureUri() {
        const name = encodeURIComponent(this.candidate.firstName);
        return `https://robohash.org/${name}?set=set4`;
    }

}

@NgModule({
    declarations: [CandidateCardComponent],
    exports: [CandidateCardComponent],
    imports: [
        CommonModule,
        MatCardModule,
        SkillListModule
    ]
})
export class CandidateCardModule {
}

