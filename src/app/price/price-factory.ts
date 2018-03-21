import { Price } from './price';

export class PriceFactory {

    createPriceFromCoefficientExponent({coefficient, exponent, currency}:
                                           { coefficient: number; exponent: number; currency: string }): Price {
        throw new Error('Not implemented yet!');
    }

}
