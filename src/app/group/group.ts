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

    getFoodConstraintList(): string[] {

        const foodConstraintListList = this._personList
            .map(person => person.foodConstraintList);

        const foodConstraintList = [].concat(...foodConstraintListList);

        const foodConstraintSet = new Set(foodConstraintList);

        const uniqueFoodConstraintList = Array.from(foodConstraintSet);

        uniqueFoodConstraintList.sort();

        return uniqueFoodConstraintList;

    }

}
