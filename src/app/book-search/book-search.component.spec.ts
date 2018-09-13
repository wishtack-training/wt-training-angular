
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSearchComponent } from './book-search.component';

describe('DashboardComponent', () => {
  let component: BookSearchComponent;
  let fixture: ComponentFixture<BookSearchComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
