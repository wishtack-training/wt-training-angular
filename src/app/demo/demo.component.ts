import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Sandwich, SandwichConstraint } from '../sandwich/sandwich';

@Component({
    selector: 'wt-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

    ingredientForm = new FormGroup({
        isToxic: new FormControl(),
        name: new FormControl(null, [
            Validators.required
        ]),
        quantity: new FormControl()
    });

    sandwich = new Sandwich({
        id: 'le-vert',
        name: 'Le vert',
        constraintList: [
            SandwichConstraint.Vegetarian
        ]
    });

    now: Date;

    ngOnInit() {
        /* @hack: Don't do this at home! */
        setInterval(() => {
            this.now = new Date();
        }, 1000);

    }

    hasVeganConstraint() {
        return this.sandwich.constraintList.includes(SandwichConstraint.Vegan);
    }

    addVeganConstraint() {
        this.sandwich = new Sandwich({
            ...this.sandwich,
            constraintList: [
                ...this.sandwich.constraintList,
                SandwichConstraint.Vegan
            ]
        });
    }

    addIngredient() {
        console.log(this.ingredientForm.value);
    }
}
