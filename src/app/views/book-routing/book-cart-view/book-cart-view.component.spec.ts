import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCartViewComponent } from './book-cart-view.component';

describe('BookCartViewComponent', () => {
  let component: BookCartViewComponent;
  let fixture: ComponentFixture<BookCartViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCartViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCartViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
