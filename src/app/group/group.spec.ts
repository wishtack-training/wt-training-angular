class Group {

    private _personList: Person[] = [];

    addPerson(person: Person) {
        this._personList.push(person);
    }

    getPersonList() {
        return this._personList;
    }

    removePerson(person: Person) {
        throw new Error('😱 Not implemented yet!');
    }

    getCount(): number {
        throw new Error('😱 Not implemented yet!');
    }

    getFoodConstraintList(): string[] {
        throw new Error('😱 Not implementedt yet!');
    }

}


class Person {

    constructor(firstName: string, lastName: string, foodConstraintList: string[]) {
    }

}

describe('Group', () => {

    let group: Group;
    let person1: Person;
    let person2: Person;
    let person3: Person;

    beforeEach(() => {

        group = new Group();

        person1 = new Person(
            'Foo',
            'BAR',
            ['vegan']
        );
        person2 = new Person(
            'John',
            'DOE',
            ['gluten-intolerant', 'vegan']
        );
        person3 = new Person(
            'John',
            'BAR',
            []
        );

    });

    it('should add people', () => {

        group.addPerson(person1);
        group.addPerson(person2);
        group.addPerson(person3);

        const personList = group.getPersonList();

        expect(personList).toEqual([
            person1,
            person2,
            person3
        ]);

    });

    xit('should remove people', () => {

        group.addPerson(person1);
        group.addPerson(person2);
        group.addPerson(person3);

        group.removePerson(person2);

        const personList = group.getPersonList();

        expect(personList).toEqual([
            person1,
            person3
        ]);
    });

    xit('should get count', () => {

        group.addPerson(person1);
        group.addPerson(person2);
        group.addPerson(person3);

        const count = group.getCount();

        expect(count).toEqual(3);

    });

    xit('should get group food constraints', () => {

        group.addPerson(person1);
        group.addPerson(person2);
        group.addPerson(person3);

        const foodConstraintList = group.getFoodConstraintList();

        expect(foodConstraintList).toEqual(['gluten-intolerant', 'vegan']);

    });

});
