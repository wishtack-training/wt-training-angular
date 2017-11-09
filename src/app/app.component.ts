
import { Component, ViewEncapsulation } from '@angular/core';
import { UserStore } from './user/user-store';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'wt-app',
    styleUrls: [
        './app.component.css'
    ],
    templateUrl: './app.component.html'
})
export class AppComponent {
}
