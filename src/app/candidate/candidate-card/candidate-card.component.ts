import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Candidate } from '../candidate';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-candidate-card',
    templateUrl: './candidate-card.component.html',
    styleUrls: ['./candidate-card.component.scss']
})
export class CandidateCardComponent implements OnInit {

    @Input() candidate: Candidate;

    ngOnInit() {
    }

    /**
     * @todo this should be in `Candidate.pictureUri`.
     */
    getPictureUri() {
        const name = encodeURIComponent(this.candidate.firstName);
        return `https://robohash.org/${name}?set=set4`;
    }

}
