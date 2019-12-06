import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { Item } from '../cart/item';

@Component({
  selector: 'as-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() item: Item;
}

@NgModule({
  declarations: [ItemComponent],
  exports: [ItemComponent],
  imports: [
    CommonModule
  ]
})
export class ItemModule {
}
