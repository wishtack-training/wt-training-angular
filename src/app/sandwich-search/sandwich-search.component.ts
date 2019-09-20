import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { concat, defer, Observable, of } from 'rxjs';
import { distinctUntilChanged, map, shareReplay, switchMap } from 'rxjs/operators';
import { CartService } from '../cart-v2/cart.service';
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
export class SandwichSearchComponent {

  keywordsControl = new FormControl();

  sandwichList$: Observable<Sandwich[]>;
  sandwichCount$: Observable<number>;
  isDisplayed = true;

  constructor(
    private _cartService: CartService,
    private _sandwichSearch: SandwichSearch
  ) {

    /* Forcing valueChanges to start with current value. */
    const keywords$ = getControlValue(this.keywordsControl);

    this.sandwichList$ = keywords$.pipe(
      switchMap(keywords => this._sandwichSearch.searchSandwiches(keywords)),
      shareReplay({
        bufferSize: 1,
        refCount: true
      })
    );

    this.sandwichCount$ = this.sandwichList$
      .pipe(map(sandwichList => sandwichList.length));

  }

  /* Just for fun... */
  preloadSandwichModule() {
    import('../views/sandwich/sandwich-views.module');
  }

  buySandwich(sandwich: Sandwich) {
    this._cartService.addSandwich(sandwich);
  }

}
