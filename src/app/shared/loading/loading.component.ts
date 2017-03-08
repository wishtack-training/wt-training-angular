import { Component, Input } from '@angular/core';

@Component({
  selector: 'wt-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
/**
 * @todo move this to a independant module.
 */
export class LoadingComponent {

  @Input() isReady: boolean;

}
