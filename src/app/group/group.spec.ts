import { FoodConstraint } from './food-constraint';
import { Group } from './group';
import { Person } from './person';


describe('Group', () => {

    let group: Group;
    let person1: Person;
    let person2: Person;
    let person3: Person;

    beforeEach(() => {

        group = new Group();

        person1 = new Person({
            firstName: 'Foo',
            lastName: 'BAR',
            foodConstraintList: [FoodConstraint.Vegan]
        });
        person2 = new Person({
            firstName: 'John',
            lastName: 'DOE',
            foodConstraintList: [FoodConstraint.GlutenIntolerant, FoodConstraint.Vegan]
        });
        person3 = new Person({
            firstName: 'John',
            lastName: 'BAR',
            foodConstraintList: []
        });

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

    it('should remove people', () => {

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

    it('should get count', () => {

        group.addPerson(person1);
        group.addPerson(person2);
        group.addPerson(person3);

        const count = group.getCount();

        expect(count).toEqual(3);

    });

    it('should get group food constraints', () => {

        group.addPerson(person1);
        group.addPerson(person2);
        group.addPerson(person3);

        const foodConstraintList = group.getFoodConstraintList();

        expect(foodConstraintList).toEqual(['gluten-intolerant', 'vegan']);

    });

});
