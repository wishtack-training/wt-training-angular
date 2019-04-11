import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map, shareReplay, startWith, switchMap } from 'rxjs/operators';
import { Candidate } from '../../candidate/candidate';
import { CandidateSearch } from '../candidate-search.service';

export type CandidateSearchResponse = Partial<Candidate>[];

@Component({
    selector: 'wt-candidate-search',
    templateUrl: './candidate-search.component.html',
    styleUrls: ['./candidate-search.component.scss']
})
export class CandidateSearchComponent implements OnInit {

    keywordsControl = new FormControl();

    error$: Observable<any>;
    candidateList$: Observable<Candidate[]>;
    candidateCount$: Observable<number>;

    constructor(private _candidateSearch: CandidateSearch) {
    }

    ngOnInit() {

        const keywords$ = this.keywordsControl.valueChanges;

        const candidateSearchResult$ = keywords$
            .pipe(
                startWith('angular'),
                debounceTime(50),
                switchMap(keywords => this._candidateSearch.searchCandidates(keywords)),
                shareReplay({
                    bufferSize: 1,
                    refCount: true
                })
            );

        this.error$ = candidateSearchResult$.pipe(map(result => result.error));
        this.candidateList$ = candidateSearchResult$.pipe(map(result => result.candidateList));
        this.candidateCount$ = this.candidateList$.pipe(map(candidateList => candidateList.length));

        // interval(100)
        //     .pipe(
        //         map(value => {
        //
        //             if (value === 3) {
        //                 throw new Error('I hate 3');
        //             }
        //
        //             return value % 10;
        //         }),
        //         filter(value => value !== 0),
        //         take(20),
        //         onErrorResumeNext()
        //     )
        //     .subscribe({
        //         next: console.log,
        //         error: err => console.error(err),
        //         complete: () => console.log('DONE')
        //     });


    }
}
