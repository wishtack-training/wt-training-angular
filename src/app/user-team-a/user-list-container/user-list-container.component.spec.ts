import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListContainerComponent } from './user-list-container.component';

describe('UserListContainerComponent', () => {
  let component: UserListContainerComponent;
  let fixture: ComponentFixture<UserListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
