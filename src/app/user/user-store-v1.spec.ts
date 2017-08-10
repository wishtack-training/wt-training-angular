/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { async, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { UserModule } from './user.module';
import { UserStore } from './user-store';
import { User } from './user';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import Spy = jasmine.Spy;

describe('UserStore', () => {

    let http: Http;
    let userStore: UserStore;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            imports: [
                UserModule
            ]
        })
            .compileComponents();

    }));

    beforeEach(inject([
        Http,
        UserStore
    ], (
        _http,
        _userStore
    ) => {
        http = _http;
        userStore = _userStore;
    }));

    it('should add user', fakeAsync(() => {

        let userList;

        spyOn(http, 'get')
            .and.returnValue(Observable.from([
            {
                json: () => [
                    {
                        firstName: 'Foo',
                        lastName: 'BAR'
                    },
                    {
                        firstName: 'John',
                        lastName: 'DOE'
                    }
                ]
            }
        ]));

        userStore.getUserList()
            .subscribe((_userList) => userList = _userList);

        expect(http.get).toHaveBeenCalledTimes(1);
        expect((http.get as Spy).calls.argsFor(0)[0]).toMatch(/\/users/);

        expect(userList).toEqual([
            new User({
                firstName: 'Foo',
                lastName: 'BAR'
            }),
            new User({
                firstName: 'John',
                lastName: 'DOE'
            })
        ]);

    }));

});

