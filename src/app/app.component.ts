import { Component } from '@angular/core';
import { Link } from './nav/nav.component';

@Component({
  selector: 'as-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'training';

  links: Link[] = [
    {
      route: '/book/search',
      name: 'Search'
    },
    {
      route: '/cart',
      name: 'Cart'
    }
  ];

}
