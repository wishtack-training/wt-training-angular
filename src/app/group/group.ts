import { Person } from './person';

export class Group {

    private _personList: Person[] = [];

    addPerson(person: Person) {
        this._personList.push(person);
    }

    getPersonList() {
        return this._personList;
    }

    removePerson(person: Person) {
        this._personList = this._personList.filter(_person => _person !== person);
    }

    getCount(): number {
        return this._personList.length;
    }

    getFoodConstraintList() {

        /* [ [ 'vegan' ], [ 'gluten-intolerant', 'vegan' ], [] ] */
        const foodConstraintListList = this._personList
            .map(person => person.foodConstraintList);

        /* [ 'vegan', 'gluten-intolerant', 'vegan' ] */
        const foodConstraintList = [].concat(...foodConstraintListList);

        /* Set { 'vegan', 'gluten-intolerant' } */
        const foodConstraintSet = new Set(foodConstraintList);

        /* [ 'vegan', 'gluten-intolerant' ] */
        const uniqueFoodConstraintList = Array.from(foodConstraintSet);

        /* [ 'gluten-intolerant', 'vegan' ] */
        uniqueFoodConstraintList.sort();

        return uniqueFoodConstraintList;

    }

}
