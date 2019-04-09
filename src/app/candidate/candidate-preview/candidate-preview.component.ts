import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidate } from '../candidate';

@Component({
    selector: 'wt-candidate-preview',
    templateUrl: './candidate-preview.component.html',
    styleUrls: ['./candidate-preview.component.scss']
})
export class CandidatePreviewComponent {

    @Input() candidate: Candidate;
    @Output() candidateRemove = new EventEmitter();

    removeCandidate() {
        this.candidateRemove.emit();
    }

}
