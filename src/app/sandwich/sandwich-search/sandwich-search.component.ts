import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, onErrorResumeNext, retry, switchMap } from 'rxjs/operators';
import { Sandwich } from '../sandwich';
import { SandwichRepository } from '../sandwich-repository.service';


@Component({
    selector: 'wt-sandwich-search',
    templateUrl: './sandwich-search.component.html',
    styleUrls: ['./sandwich-search.component.scss']
})
export class SandwichSearchComponent implements OnInit {

    sandwichList: Sandwich[];
    sandwichSearchForm = new FormGroup({
        keywords: new FormControl(),
        maxPrice: new FormControl()
    });

    constructor(
        private _sandwichRepository: SandwichRepository
    ) {
    }

    ngOnInit() {

        const sandwichList$ = this.sandwichSearchForm.valueChanges
            .pipe(
                debounceTime(100),
                switchMap(params => {
                    return this._sandwichRepository.search(params)
                        .pipe(
                            retry(3),
                            onErrorResumeNext()
                        );
                })
            );

        sandwichList$
            .subscribe({
                next: sandwichList => this.sandwichList = sandwichList,
                error: err => console.error(err),
                complete: () => console.log('DONE')
            });

        this.sandwichSearchForm.setValue({
            keywords: null,
            maxPrice: 10
        });

    }


}
