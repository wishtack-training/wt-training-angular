import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { AppModule } from '../../app.module';
import { BookSearchService } from '../book-search.service';
import { BookSearchComponent } from './book-search.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<BookSearchComponent>;
  let component: BookSearchComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchComponent);
    component = fixture.componentInstance;
  });

  it('should show search results', () => {
    const service = TestBed.inject(BookSearchService);

    spyOn(service, 'search').and.returnValue(
      of([
        {
          title: 'Rework',
          price: 10
        }
      ])
    );

    component.searchForm.patchValue({
      keywords: 'Rework'
    });
    component.search();

    fixture.detectChanges();

    expect(component.books).toEqual([
      {
        title: 'Rework',
        price: 10
      }
    ]);

    const elList = fixture.debugElement.queryAll(By.css('h1'));

    expect(elList.length).toEqual(1);
    expect(elList[0].nativeElement.textContent).toEqual('Rework');

  });
});
