import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablePlaygroundComponent } from './observable-playground.component';

describe('ObservablePlaygroundComponent', () => {
    let component: ObservablePlaygroundComponent;
    let fixture: ComponentFixture<ObservablePlaygroundComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ObservablePlaygroundComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ObservablePlaygroundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
