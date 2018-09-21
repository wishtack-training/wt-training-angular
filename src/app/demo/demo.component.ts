import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'wt-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnDestroy, OnInit {

    name = 'demo';

    private _interval;
    tmp: string;

    ngOnInit() {
        this._interval = setInterval(() => this.name += '.', 2000);
    }

    ngOnDestroy() {
      clearInterval(this._interval);
    }

    getPictureUrl() {

        if (this.name == null) {
            return null;
        }

        return `https://robohash.org/${this.name}`;

    }

    resetName() {
        this.name = 'Foo';
    }
}
