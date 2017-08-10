/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { async, fakeAsync, inject, TestBed } from '@angular/core/testing';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Session } from './session/session';

describe('UserStore', () => {

    let session: Session;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            imports: [
                AppModule,
                RouterTestingModule
            ]
        })
            .compileComponents();

    }));

    beforeEach(inject([Session], (_session) => {
        session = _session;
    }));

    it('should handle login/logout', fakeAsync(() => {

        const fixture = TestBed.createComponent(AppComponent);

        fixture.detectChanges();

        const input = fixture.debugElement
            .query(By.css('form input'));

        input.nativeElement.value = 'foobar';
        input.triggerEventHandler('input', {
            target: input.nativeElement
        });

        fixture.debugElement.query(By.css('form'))
            .triggerEventHandler('submit', {});

        fixture.detectChanges();

        expect(fixture.debugElement
            .query(By.css('form input')))
            .toBeNull();

        expect(fixture.debugElement
            .query(By.css('.wt-logout')))
            .not.toBeNull();

        fixture.debugElement
            .query(By.css('.wt-logout'))
            .nativeElement
            .click();

        fixture.detectChanges();

        expect(fixture.debugElement
            .query(By.css('form input')))
            .not.toBeNull();

        expect(fixture.debugElement
            .query(By.css('.wt-logout')))
            .toBeNull();

    }));

});

