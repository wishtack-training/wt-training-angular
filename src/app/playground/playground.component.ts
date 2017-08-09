import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/onErrorResumeNext';

import { User } from '../user/user';


@Component({
    selector: 'wt-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

    searchFormGroup: FormGroup;
    user$: Observable<User>;

    constructor(private _http: Http) {
        this.searchFormGroup = new FormGroup({
            keywords: new FormControl()
        });
    }

    ngOnInit() {

        this.user$ = this.searchFormGroup.valueChanges
            .debounceTime(500)
            .map((value) => value.keywords)
            .switchMap((keywords) => this._http.get(`http://wt-users.getsandbox.com/users/${keywords}`))
            .filter((response) => response.text() !== 'undefined')
            .map((response) => response.json())
            .onErrorResumeNext()
            .shareReplay();
    }

}