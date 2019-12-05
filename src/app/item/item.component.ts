import { Component, Input } from '@angular/core';
import { Item } from '../cart/item';

@Component({
  selector: 'as-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() item: Item;
}
