import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { concat, defer, Observable, of } from 'rxjs';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { Sandwich } from '../cart/sandwich';
import { SandwichSearch } from './sandwich-search.service';


function getControlValue(control: FormControl): Observable<string> {
  return concat(
    defer(() => of(control.value)),
    control.valueChanges
  )
    .pipe(
      map(keywords => keywords && keywords.toLowerCase()),
      distinctUntilChanged()
    );
}

@Component({
  selector: 'wt-sandwich-search',
  templateUrl: './sandwich-search.component.html',
  styleUrls: ['./sandwich-search.component.scss']
})
export class SandwichSearchComponent implements OnInit {

  keywordsControl = new FormControl();
  sandwichList: Sandwich[];

  constructor(private _sandwichSearch: SandwichSearch) {
  }

  ngOnInit() {

    /* Forcing valueChanges to start with current value. */
    const keywords$ = getControlValue(this.keywordsControl);

    const sandwichList$ = keywords$.pipe(
      switchMap(keywords => this._sandwichSearch.searchSandwiches(keywords))
    );

    sandwichList$.subscribe(sandwichList => this.sandwichList = sandwichList);

  }

}
