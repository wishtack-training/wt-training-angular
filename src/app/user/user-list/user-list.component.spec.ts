/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserListComponent } from './user-list.component';
import { UserModule } from '../user.module';

/* @todo helpers that should be moved somewhere else. */
const fillInput = (debugElement: DebugElement, text) => {

    debugElement.nativeElement.value = text;
    debugElement.nativeElement.dispatchEvent(new Event('input'));
    debugElement.triggerEventHandler('input', new Event('input'));

};

describe('UserListComponent', () => {

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            imports: [
                UserModule
            ]
        })
            .compileComponents();

    }));

    xit('should add users to user store', () => {

        const fixture = TestBed.createComponent(UserListComponent);
        const component = fixture.componentInstance;
        const debugElement = fixture.debugElement;

        fixture.detectChanges();

        const input = debugElement.query(By.css('input[name="firstName"]'));

        fillInput(input, 'John');

        fixture.detectChanges();

        /* Submit. */
        debugElement.query(By.css('button')).nativeElement.click();

        fixture.detectChanges();

        const userPreviewList = debugElement.queryAll(By.css('wt-user-preview'));

        expect(userPreviewList.length).toBe(1);

        expect(userPreviewList[0].nativeElement.textContent.trim())
            .toEqual('John');

    });

    it('should add users to user store (bad way but works)', () => {

        const fixture = TestBed.createComponent(UserListComponent);
        const component = fixture.componentInstance;
        const debugElement = fixture.debugElement;

        fixture.detectChanges();

        component.user.firstName = 'John';
        component.user.lastName = 'DOE';

        fixture.detectChanges();

        /* Submit. */
        debugElement.query(By.css('button')).nativeElement.click();

        fixture.detectChanges();

        const userPreviewList = debugElement.queryAll(By.css('wt-user-preview'));

        expect(userPreviewList.length).toBe(1);

        expect(userPreviewList[0].nativeElement.textContent.trim())
            .toEqual('John');

    });

});
