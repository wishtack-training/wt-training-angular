import { Component, HostBinding, OnInit, trigger } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'wt-help-view',
    templateUrl: './help-view.component.html',
    styleUrls: ['./help-view.component.css']
})
export class HelpViewComponent implements OnInit {

    obsHelpId: Observable<string>;
    obsIsFull: Observable<boolean>;

    constructor(private _activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {

        const params = this._activatedRoute.params;

        this.obsHelpId = params.map((_params) => _params['helpId']);
        this.obsIsFull = params.map((_params) => _params['mode'] === 'full');

        // this.obsEvent = this._activatedRoute.params
        //     .map((params) => params['eventId'])
        //     .mergeMap((eventId) => this._http.get(`/events/${eventId}`))
        //     .map((response) => new Event(response.json()))
        //     .catch((error) => console.log('ERROR!!!!'));

    }

}
