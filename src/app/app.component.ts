import { Component, NgModuleFactory, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentType } from '@angular/core/src/render3';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { DynamicComponentLoader } from '../lib/dynamic-component-loader';

@Component({
    selector: 'wt-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    componentType$: Observable<ComponentType<any>>;
    ngModuleFactory$: Observable<NgModuleFactory<any>>;
    isDisplayed = false;

    constructor(private _dynamicComponentLoader: DynamicComponentLoader) {
    }

    ngOnInit() {

        const componentInfo$ = this._dynamicComponentLoader.getComponentFactory('transactions');

        this.componentType$ = componentInfo$.pipe(pluck('componentType'));
        this.ngModuleFactory$ = componentInfo$.pipe(pluck('ngModuleFactory'));

    }

}
