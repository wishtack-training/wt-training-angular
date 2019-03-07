import { Component, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, onErrorResumeNext, retry, switchMap } from 'rxjs/operators';
import { Sandwich } from '../sandwich';
import { SandwichRepository } from '../sandwich-repository.service';


@Component({
    selector: 'wt-sandwich-search',
    templateUrl: './sandwich-search.component.html',
    styleUrls: ['./sandwich-search.component.scss']
})
export class SandwichSearchComponent implements OnChanges, OnDestroy, OnInit {

    @Input() keywords: string;
    @Output() keywordsChange: Observable<string>;

    sandwichList: Sandwich[];
    sandwichSearchForm = new FormGroup({
        keywords: new FormControl(),
        maxPrice: new FormControl()
    });

    private _subscription: Subscription;

    constructor(
        private _sandwichRepository: SandwichRepository
    ) {
        this.keywordsChange = this.sandwichSearchForm.get('keywords').valueChanges;
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

        this._subscription = sandwichList$
            .subscribe({
                next: sandwichList => this.sandwichList = sandwichList,
                error: err => console.error(err),
                complete: () => console.log('DONE')
            });

        this.sandwichSearchForm.get('maxPrice').setValue(10);

    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.keywords != null) {
            this.sandwichSearchForm.get('keywords').setValue(this.keywords);
        }
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }


}
