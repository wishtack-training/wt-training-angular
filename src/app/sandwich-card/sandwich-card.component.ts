import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Sandwich } from '../cart/sandwich';

@Component({
  selector: 'wt-sandwich-card',
  templateUrl: './sandwich-card.component.html',
  styleUrls: ['./sandwich-card.component.scss']
})
export class SandwichCardComponent {

  @Input() sandwich: Sandwich;

}

@NgModule({
  declarations: [SandwichCardComponent],
  exports: [SandwichCardComponent],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class SandwichCardModule {
}
