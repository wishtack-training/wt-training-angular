import { Component } from '@angular/core';
import { bookRouteResolver } from './views/book-views/book-route-resolver';

@Component({
    selector: 'wt-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    bookRouteResolver = bookRouteResolver;

}
