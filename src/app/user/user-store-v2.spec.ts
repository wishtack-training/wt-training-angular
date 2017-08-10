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
import { Http, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import Spy = jasmine.Spy;
import { MockBackend } from '@angular/http/testing';

describe('UserStore', () => {

    let mockBackend: MockBackend;
    let userStore: UserStore;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            imports: [
                UserModule
            ],
            providers: [
                MockBackend,
                {
                    provide: XHRBackend,
                    useClass: MockBackend
                }
            ]
        })
            .compileComponents();

    }));

    beforeEach(inject([
        MockBackend,
        UserStore
    ], (_mockBackend,
        _userStore) => {
        mockBackend = _mockBackend;
        userStore = _userStore;
    }));

    xit('should add user', fakeAsync(() => {

        let userList;

        mockBackend.connections.subscribe((connection) => {

            connection.mockRespond(new Response(new ResponseOptions({
                body: JSON.stringify([
                    {
                        firstName: 'Foo',
                        lastName: 'BAR'
                    },
                    {
                        firstName: 'John',
                        lastName: 'DOE'
                    }
                ])
            })));

        });

        userStore.getUserList()
            .subscribe((_userList) => userList = _userList);

        expect(mockBackend.connectionsArray.length)
            .toEqual(1);

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

