import { Component } from '@angular/core';
import { helpRouteHelper } from './help/help-route-helper';

@Component({
    selector: 'wt-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    appRouteHelper = helpRouteHelper;
}

