import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailViewComponent } from './book-detail-view.component';

describe('BookDetailViewComponent', () => {
  let component: BookDetailViewComponent;
  let fixture: ComponentFixture<BookDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
