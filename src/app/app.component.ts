import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'wt-app',
    styleUrls: [
        './shared/shake.css'
    ],
    template: `
<header><h1>WELCOME</h1></header>
<div>
    <router-outlet></router-outlet>
</div>
<footer>
    <a [routerLink]="['/users']">User list</a>
    <a [routerLink]="['/help', 'tech', {mode: 'full'}]">Help Tech</a>
    <a [routerLink]="['/help', 'biz']">Help Biz</a>
</footer>
<wt-playground></wt-playground>
`
})
export class AppComponent {
}
