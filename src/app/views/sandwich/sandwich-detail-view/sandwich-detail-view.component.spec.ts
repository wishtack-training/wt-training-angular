import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandwichDetailViewComponent } from './sandwich-detail-view.component';

describe('SandwichDetailViewComponent', () => {
  let component: SandwichDetailViewComponent;
  let fixture: ComponentFixture<SandwichDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SandwichDetailViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandwichDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
