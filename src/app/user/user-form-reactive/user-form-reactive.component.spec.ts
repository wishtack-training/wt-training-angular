import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormReactiveComponent } from './user-form-reactive.component';

describe('UserFormReactiveComponent', () => {
  let component: UserFormReactiveComponent;
  let fixture: ComponentFixture<UserFormReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFormReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
