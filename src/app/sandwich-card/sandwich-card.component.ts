import { Component, Input } from '@angular/core';
import { Sandwich } from '../cart/sandwich';

@Component({
  selector: 'wt-sandwich-card',
  templateUrl: './sandwich-card.component.html',
  styleUrls: ['./sandwich-card.component.scss']
})
export class SandwichCardComponent {

  @Input() sandwich: Sandwich;

}
