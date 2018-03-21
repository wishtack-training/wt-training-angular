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

}
