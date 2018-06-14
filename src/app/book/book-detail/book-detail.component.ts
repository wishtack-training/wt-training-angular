import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wt-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
      console.log(this._route.snapshot.paramMap.get('bookId'));
  }

}
