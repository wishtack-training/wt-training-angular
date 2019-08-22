import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'wt-help',
    templateUrl: './help.component.html',
    styleUrls: ['./help.component.scss']
})
export class HelpComponent {

    topic$: Observable<string>;

    constructor(private _route: ActivatedRoute) {
        this.topic$ = this._route.paramMap
            .pipe(map(paramMap => paramMap.get('topic')));
    }


}
