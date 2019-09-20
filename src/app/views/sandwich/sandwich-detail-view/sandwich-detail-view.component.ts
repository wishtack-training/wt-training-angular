import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { SandwichSearch } from '../../../sandwich-search/sandwich-search.service';

@Component({
  selector: 'wt-sandwich-detail-view',
  templateUrl: './sandwich-detail-view.component.html',
  styleUrls: ['./sandwich-detail-view.component.scss']
})
export class SandwichDetailViewComponent {

  sandwich$ = this._route.paramMap
    .pipe(
      map(paramMap => paramMap.get('sandwichId')),
      switchMap(sandwichId => this._sandwichSearch.getSandwich(sandwichId))
    );

  constructor(
    private _route: ActivatedRoute,
    private _sandwichSearch: SandwichSearch) {
  }


}
