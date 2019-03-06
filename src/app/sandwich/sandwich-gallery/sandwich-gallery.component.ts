import { Component } from '@angular/core';
import { Sandwich } from '../sandwich';
import { SandwichStore } from '../sandwich-store';

@Component({
    selector: 'wt-sandwich-gallery',
    templateUrl: './sandwich-gallery.component.html',
    styleUrls: ['./sandwich-gallery.component.scss']
})
export class SandwichGalleryComponent {

    private _currentId = 0;
    private _sandwichStore = new SandwichStore();

    addSandwich() {
        const sandwich = new Sandwich({
            id: (this._currentId++).toString(),
            name: prompt('name?')
        });
        this._sandwichStore.addSandwich(sandwich);
    }

    getSandwichList() {
        return this._sandwichStore.getSandwichList();
    }

    removeSandwich(sandwichId: string) {
        this._sandwichStore.removeSandwich(sandwichId);
    }

}
