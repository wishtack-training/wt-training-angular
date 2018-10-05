import { Component } from '@angular/core';
import { mealRouteResolver } from './views/meal/meal-route-resolver';

@Component({
    selector: 'wt-app',
    templateUrl: './app.component.html'
})
export class AppComponent {

    mealRouteResolver = mealRouteResolver;

}
