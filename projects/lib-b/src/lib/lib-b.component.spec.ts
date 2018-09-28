import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibBComponent } from './lib-b.component';

describe('LibBComponent', () => {
  let component: LibBComponent;
  let fixture: ComponentFixture<LibBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
