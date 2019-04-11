import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { interval } from 'rxjs';
import { filter, map, onErrorResumeNext, take } from 'rxjs/operators';
import { Candidate } from '../candidate';
import { Skill } from '../skill-form/skill';


@Component({
    selector: 'wt-candidate-search',
    templateUrl: './candidate-search.component.html',
    styleUrls: ['./candidate-search.component.scss']
})
export class CandidateSearchComponent implements OnInit {

    candidateList = [
        new Candidate({
            firstName: 'Foo',
            skillList: [
                new Skill({
                    name: 'angular'
                })
            ]
        })
    ];
    keywordsControl = new FormControl();

    constructor(private _httpClient: HttpClient) {
    }

    ngOnInit() {

        this.keywordsControl.valueChanges.subscribe(data => console.log(data));

        const candidateList$ = this._httpClient
            .get<Partial<Candidate>[]>('https://api-izghradzzu.now.sh/candidates');

        // candidateList$
        //     .subscribe({
        //         next: value => console.log(value),
        //         error: err => console.error(err),
        //         complete: () => console.log('DONE')
        //     });

        interval(100)
            .pipe(
                map(value => {

                    if (value === 3) {
                        throw new Error('I hate 3');
                    }

                    return value % 10;
                }),
                filter(value => value !== 0),
                take(20),
                onErrorResumeNext()
            )
            .subscribe({
                next: console.log,
                error: err => console.error(err),
                complete: () => console.log('DONE')
            });


    }

}
