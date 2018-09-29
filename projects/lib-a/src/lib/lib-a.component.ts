import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wt-lib-a',
  template: `
    <p>
      lib-a works!
    </p>
    <wt-lib-b></wt-lib-b>
  `,
  styles: []
})
export class LibAComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
