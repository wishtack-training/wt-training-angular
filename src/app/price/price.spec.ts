import { PriceFactory } from './price-factory';

describe('Price', () => {

    const factory = new PriceFactory();

    it('should create price from coefficient and exponent', () => {

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

    it('should create price from amount', () => {

        const price = factory.createPriceFromAmount({
            amount: 10.504,
            currency: 'USD'
        });

        expect(price.amount).toEqual(10.5);
        expect(price.coefficient).toEqual(1050);
        expect(price.exponent).toEqual(-2);
        expect(price.currency).toEqual('USD');

    });

    xit('should create price from raw string', () => {
        // @TODO: new Price(raw='10.5 $')
        // ...
    });

});
