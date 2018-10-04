import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreButtonComponent } from './more-button.component';

describe('MoreButtonContainerComponent', () => {
  let component: MoreButtonComponent;
  let fixture: ComponentFixture<MoreButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
