import { Price } from './price';

export class PriceFactory {

    createPriceFromCoefficientExponent({coefficient, exponent, currency}:
                                           { coefficient: number; exponent: number; currency: string }): Price {

        const price = new Price();

        price.amount = coefficient * Math.pow(10, exponent);
        price.coefficient = coefficient;
        price.exponent = exponent;
        price.currency = currency;

        return price;

    }

    createPriceFromAmount({amount, currency}: {amount: number; currency: string}) {

        const price = new Price();

        const exponent = -2;

        let coefficient = amount / Math.pow(10, exponent);

        /* Rounding coefficient 1050.5 => 1050. */
        coefficient = Math.round(coefficient);

        price.amount = coefficient * Math.pow(10, exponent);
        price.coefficient = coefficient;
        price.currency = currency;
        price.exponent = exponent;

        return price;

    }
}
