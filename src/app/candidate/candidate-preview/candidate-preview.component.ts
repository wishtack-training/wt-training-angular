import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Candidate } from '../candidate';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-candidate-preview',
    templateUrl: './candidate-preview.component.html',
    styleUrls: ['./candidate-preview.component.scss']
})
export class CandidatePreviewComponent {

    @Input() candidate: Candidate;

    getPictureUri() {
        const name = encodeURIComponent(this.candidate.firstName);
        return `https://robohash.org/${name}?set=set4`;
    }

}
