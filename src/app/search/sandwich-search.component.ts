import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface ApiSandwich {
  name: string;
}

@Component({
  selector: 'wt-sandwich-search',
  templateUrl: './sandwich-search.component.html',
  styleUrls: ['./sandwich-search.component.scss']
})
export class SandwichSearchComponent implements OnInit {

  constructor(private _httpClient: HttpClient) {
  }

  ngOnInit() {
    this._httpClient.get<ApiSandwich[]>('https://sandwich.now.sh/sandwiches')
      .subscribe(data => {
        console.log(data);
      });
  }

}
