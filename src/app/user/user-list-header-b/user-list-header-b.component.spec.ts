import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListHeaderBComponent } from './user-list-header-b.component';

describe('UserListHeaderBComponent', () => {
  let component: UserListHeaderBComponent;
  let fixture: ComponentFixture<UserListHeaderBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListHeaderBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListHeaderBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
