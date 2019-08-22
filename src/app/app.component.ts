import { Component } from '@angular/core';
import { appRouteHelper } from './app-route-helper';

@Component({
    selector: 'wt-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    appRouteHelper = appRouteHelper;
}

