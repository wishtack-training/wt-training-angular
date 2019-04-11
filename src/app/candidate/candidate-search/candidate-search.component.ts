import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, map, shareReplay, switchMap } from 'rxjs/operators';
import { Candidate, createCandidate } from '../candidate';

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

    constructor(private _httpClient: HttpClient) {
    }

    ngOnInit() {

        const keywords$ = this.keywordsControl.valueChanges;

        const candidateSearchResult$ = keywords$
            .pipe(
                debounceTime(50),
                switchMap(keywords => this._searchCandidates(keywords)),
                shareReplay({
                    bufferSize: 1,
                    refCount: true
                })
            );

        this.error$ = candidateSearchResult$.pipe(map(result => result.error));
        this.candidateList$ = candidateSearchResult$.pipe(map(result => result.candidateList));
        this.candidateCount$ = this.candidateList$.pipe(map(candidateList => candidateList.length));

        this.keywordsControl.setValue('angular');

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

    private _searchCandidates(keywords: string): Observable<{
        error,
        candidateList: Candidate[]
    }> {

        return this._httpClient.get<CandidateSearchResponse>('https://api-izghradzzu.now.sh/candidates', {
            params: {
                q: keywords
            }
        })
            .pipe(
                map(candidateDataList => {
                    return candidateDataList.map(candidateData => createCandidate(candidateData));
                }),
                map(candidateList => {
                    return {
                        candidateList,
                        error: null
                    };
                }),
                catchError(error => {
                    console.error(error);
                    return of({
                        candidateList: null,
                        error
                    });
                })
            );

    }
}
