import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'wt-layout-default',
    templateUrl: './layout-default.component.html',
    styleUrls: ['./layout-default.component.scss'],
})
export class LayoutDefaultComponent {

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );

    constructor(private breakpointObserver: BreakpointObserver) {
    }

}
