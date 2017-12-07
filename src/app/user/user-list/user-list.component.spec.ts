/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { async, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserListComponent } from './user-list.component';
import { UserModule } from '../user.module';
import { CoreModule } from '../../core/core.module';

/* @todo helpers that should be moved somewhere else. */
const fillInput = (nativeElement, text) => {

    nativeElement.value = text;
    nativeElement.dispatchEvent(new Event('input'));

};

describe('UserListComponent', () => {

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            imports: [
                CoreModule,
                UserModule
            ]
        })
            .compileComponents();

    }));

    it('should add users to user store', fakeAsync(() => {

        const fixture = TestBed.createComponent(UserListComponent);
        const component = fixture.componentInstance;
        const debugElement = fixture.debugElement;

        fixture.detectChanges();

        const input = debugElement.query(By.css('input')).nativeElement;

        fillInput(input, 'John');

        fixture.detectChanges();

        /* Submit. */
        debugElement.query(By.css('button')).nativeElement.click();

        fixture.detectChanges();


        const userPreviewList = debugElement.queryAll(By.css('wt-user-preview'));

        expect(userPreviewList.length).toBe(1);

        expect(userPreviewList[0].nativeElement.textContent.trim())
            .toEqual('John');

    }));

    it('should show error message if user store breaks', () => {

        const fixture = TestBed.createComponent(UserListComponent);
        const component = fixture.componentInstance;
        const debugElement = fixture.debugElement;

        // component['_userStore']

    });

});
