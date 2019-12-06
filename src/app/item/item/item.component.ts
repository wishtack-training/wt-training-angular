import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule } from '@angular/core';
import { Item } from '../item';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'as-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() item: Item;

  isExpensive() {
    console.count('isExpensive');
    return this.item.price > 10;
  }
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
