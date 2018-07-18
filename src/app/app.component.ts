import { Component, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentType } from '@angular/core/src/render3';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DynamicComponentLoader } from '../lib/dynamic-component-loader';

@Component({
    selector: 'wt-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    @ViewChild('testOutlet', {read: ViewContainerRef}) testOutlet: ViewContainerRef;

    componentType$: Observable<Type<any>>;

    constructor(private _dynamicComponentLoader: DynamicComponentLoader) {
    }

    ngOnInit() {

    }

    load() {

        const componentFactory$ = this._dynamicComponentLoader.getComponentFactory('transactions');

        this.componentType$ = componentFactory$
            .pipe(map(componentFactory => componentFactory.componentType));

        componentFactory$.subscribe(componentFactory => {
            this.testOutlet.createComponent(componentFactory);
        });

    }

}
