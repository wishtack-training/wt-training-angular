import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'wt-home-layout',
    templateUrl: './home-layout.component.html',
    styleUrls: ['./home-layout.component.scss'],
})
export class HomeLayoutComponent {

    @Input() title: string;

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );

    constructor(private breakpointObserver: BreakpointObserver) {
    }

}
