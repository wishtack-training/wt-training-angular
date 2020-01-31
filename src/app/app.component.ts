import { Component } from '@angular/core';

@Component({
  selector: 'mc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  preload() {
    import('./pages/user.module');
  }
}

