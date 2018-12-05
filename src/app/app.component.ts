import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
    selector: 'wt-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    private _backgroundColor = environment.appConfig.backgroundColor;

    ngOnInit() {

        /* @hack: let's own the DOM!!! */
        if (this._backgroundColor != null) {
            document.body.style.backgroundColor = this._backgroundColor;
        }

    }

}
