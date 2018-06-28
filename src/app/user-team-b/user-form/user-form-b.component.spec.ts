import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormBComponent } from './user-form-b.component';

describe('UserFormComponent', () => {
  let component: UserFormBComponent;
  let fixture: ComponentFixture<UserFormBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFormBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
