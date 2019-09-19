import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { concat, defer, of } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Sandwich } from '../cart/sandwich';

export interface ApiSandwich {
  name: string;
  price: {
    amount: number
    currency: string;
  };
}

@Component({
  selector: 'wt-sandwich-search',
  templateUrl: './sandwich-search.component.html',
  styleUrls: ['./sandwich-search.component.scss']
})
export class SandwichSearchComponent implements OnInit {

  keywordsControl = new FormControl();
  sandwichList: Sandwich[];

  constructor(private _httpClient: HttpClient) {
  }

  ngOnInit() {

    /* Forcing valueChanges to start with current value. */
    const keywords$ = concat(
      defer(() => of(this.keywordsControl.value)),
      this.keywordsControl.valueChanges
    )
      .pipe(
        map(keywords => keywords && keywords.toLowerCase()),
        distinctUntilChanged()
      );

    keywords$
      .subscribe(keywords => {

        const params = keywords != null ? {q: keywords} : {};

        this._httpClient.get<ApiSandwich[]>('https://sandwich.now.sh/sandwiches', {
          params
        })
          .subscribe(itemList => {
            this.sandwichList = itemList.map(item => new Sandwich({
              title: item.name,
              price: item.price.amount
            }));
          });

      });

  }

}
