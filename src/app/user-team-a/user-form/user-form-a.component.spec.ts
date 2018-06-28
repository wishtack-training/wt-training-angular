import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormAComponent } from './user-form-a.component';

describe('UserFormComponent', () => {
  let component: UserFormAComponent;
  let fixture: ComponentFixture<UserFormAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFormAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
