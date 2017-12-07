/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { async, fakeAsync, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { UserListComponent } from './user-list.component';
import { UserModule } from '../user.module';
import { CoreModule } from '../../core/core.module';
import { UserStore } from '../../user-core/user-store';
import { User } from '../user';

/* @todo helpers that should be moved somewhere else. */
const fillInput = (nativeElement, text) => {

    nativeElement.value = text;
    nativeElement.dispatchEvent(new Event('input'));

};

describe('UserListComponent', () => {

    let userStore: UserStore;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            imports: [
                CoreModule,
                UserModule
            ]
        })
            .compileComponents();

    }));

    beforeEach(inject(
        [UserStore],
        _userStore => userStore = _userStore)
    );

    it('should show users', () => {

        const fixture = TestBed.createComponent(UserListComponent);
        const component = fixture.componentInstance;
        const debugElement = fixture.debugElement;

        spyOn(userStore, 'getUserList').and.returnValue([
            new User({
                firstName: 'Foo'
            })
        ]);

        fixture.detectChanges();

        expect(userStore.getUserList).toHaveBeenCalled();

        const userPreviewList = debugElement.queryAll(By.css('wt-user-preview'));

        expect(userPreviewList.length).toBe(1);

        expect(userPreviewList[0].nativeElement.textContent.trim())
            .toEqual('Foo');

    });

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

});
