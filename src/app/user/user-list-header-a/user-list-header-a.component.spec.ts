import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListHeaderAComponent } from './user-list-header-a.component';

describe('UserListHeaderAComponent', () => {
  let component: UserListHeaderAComponent;
  let fixture: ComponentFixture<UserListHeaderAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListHeaderAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListHeaderAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
