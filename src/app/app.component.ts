import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/observable/interval';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/shareReplay';

@Component({
    selector: 'wt-app',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.css'
    ]
})
export class AppComponent implements OnInit {

    counter$: Observable<number>;

    ngOnInit() {

        this.counter$ = interval(1000);

    }

}

