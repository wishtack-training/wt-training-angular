import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailViewComponent } from './user-detail-view.component';

describe('UserDetailViewComponent', () => {
  let component: UserDetailViewComponent;
  let fixture: ComponentFixture<UserDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
