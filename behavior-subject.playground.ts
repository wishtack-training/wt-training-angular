import { BehaviorSubject } from 'rxjs/BehaviorSubject';

/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */


class CartStore {

    state$ = new BehaviorSubject({
        cartItemList: []
    });

    addItemToCart(item) {

        let state = this.state$.getValue();

        state = {
            ...state,
            cartItemList: [...state.cartItemList, item]
        };

        this.state$.next(state);

    }

}

const cartStore = new CartStore();

cartStore.state$.subscribe(state => console.log(state));

cartStore.addItemToCart({name: 'Foo'});


class FormuleStore {

    getIngredientIdList() {
        // http.get /resources/:resourceId?depth=3
        // relationshipList
        return ingredientIdList;
    }

}

const formuleStore = new FormuleStore();
const currentFormuleStore = new CurrentFormuleStore();
const ingredientStore = new IngredientStore();

class Formule {
    id: string;
    name: string;
}

class FormuleIngredientRelationship {
    formuleId: string;
    inredientId: string;
    pourcentage: string;
}

class Ingredient {
    id: string;
    name: string;
}

// <wt-formule [formule]="">

formuleStore.getIngredientIdList();

// <wt-ingredient [ingredientId]=ingredientId>

ingredientStore.getIngredient(ingredientId);








