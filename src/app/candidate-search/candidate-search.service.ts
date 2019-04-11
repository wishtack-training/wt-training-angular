import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Candidate, createCandidate } from '../candidate/candidate';
import { CandidateSearchResponse } from './candidate-search/candidate-search.component';

@Injectable({
    providedIn: 'root'
})
export class CandidateSearch {

    constructor(private _httpClient: HttpClient) {
    }

    searchCandidates(keywords: string): Observable<{
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
