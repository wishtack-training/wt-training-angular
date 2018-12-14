import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
    selector: 'wt-book-search-view',
    templateUrl: './book-search-view.component.html',
    styleUrls: ['./book-search-view.component.scss']
})
export class BookSearchViewComponent {

    keywords$ = this._activatedRoute.queryParamMap
        .pipe(
            map(queryParamMap => queryParamMap.get('keywords'))
        );

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router
    ) {
    }

    updateRoute(keywords: string) {
        this._router.navigate(['/book', 'search'], {
            queryParams: {
                keywords
            }
        });
    }
}
