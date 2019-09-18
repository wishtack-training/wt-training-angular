import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sandwich } from '../cart/sandwich';

@Component({
  selector: 'wt-sandwich-list',
  templateUrl: './sandwich-list.component.html',
  styleUrls: ['./sandwich-list.component.scss']
})
export class SandwichListComponent {

  @Input() sandwichList: Sandwich[];
  @Output() sandwichRemove = new EventEmitter<Sandwich>();

  removeSandwich(sandwich: Sandwich) {
    this.sandwichRemove.emit(sandwich);
  }

}
