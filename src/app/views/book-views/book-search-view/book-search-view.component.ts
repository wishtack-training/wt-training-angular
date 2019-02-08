import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { bookRouteResolver } from '../book-route-resolver';

@Component({
    selector: 'wt-book-search-view',
    templateUrl: './book-search-view.component.html',
    styleUrls: ['./book-search-view.component.scss']
})
export class BookSearchViewComponent {

    keywords$: Observable<string>;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router
    ) {
        this.keywords$ = this._activatedRoute.queryParamMap
            .pipe(
                map(queryParamMap => queryParamMap.get('keywords'))
            );
    }

    updateRoute(keywords: string) {

        let queryParams: Params;

        if (keywords != null && keywords.length > 0) {
            queryParams = {
                keywords
            };
        }

        this._router.navigate(bookRouteResolver.searchBookRoute(), {
            queryParams
        });
    }

}
