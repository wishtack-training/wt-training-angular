import { PriceFactory } from './price-factory';

describe('Price', () => {

    xit('should create price from coefficient and exponent', () => {

        const factory = new PriceFactory();

        const price = factory.createPriceFromCoefficientExponent({
            coefficient: 1050,
            exponent: -2,
            currency: 'USD'
        });

        expect(price.amount).toEqual(10.5);
        expect(price.coefficient).toEqual(1050);
        expect(price.exponent).toEqual(-2);
        expect(price.currency).toEqual('USD');

    });

    xit('should create price from amount', () => {
        // @TODO: new Price(amount=10.505, currency='USD');
        // @TODO: check price.amount 10.5
        // @TODO: check price.currency
        // @TODO: check price.coefficient 1050
        // @TODO: check price.exponent -2

    });

    xit('should create price from raw string', () => {
        // @TODO: new Price(raw='10.5 $')
        // ...
    });

});
