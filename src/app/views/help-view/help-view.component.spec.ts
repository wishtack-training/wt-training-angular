/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HelpViewComponent } from './help-view.component';

describe('HelpViewComponent', () => {
  let component: HelpViewComponent;
  let fixture: ComponentFixture<HelpViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
