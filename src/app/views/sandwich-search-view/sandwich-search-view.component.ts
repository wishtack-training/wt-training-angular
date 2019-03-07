import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'wt-sandwich-search-view',
    templateUrl: './sandwich-search-view.component.html',
    styleUrls: ['./sandwich-search-view.component.scss']
})
export class SandwichSearchViewComponent implements OnInit {

    keywords$: Observable<string>;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router
    ) {
    }

    ngOnInit() {
        this.keywords$ = this._activatedRoute.queryParamMap
            .pipe(
                map(queryParamMap => queryParamMap.get('keywords'))
            );
    }

    onKeywordsChange(keywords: string) {
        this._router.navigate(['/search'], {
            queryParams: {
                keywords
            }
        });
    }
}
