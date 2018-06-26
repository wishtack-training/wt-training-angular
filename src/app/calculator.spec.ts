class Calculator {
    /**
     * @TODO: Only handles addition for the moment.
     * @param expression
     */
    evaluate(expression: string): number {
        return expression.split('+')
            .map(valueString => parseInt(valueString, 10))
            .reduce((result, value) => result + value, 0);
    }
}

describe('Calculator', () => {

    it('should add stuff', () => {

        const calculator = new Calculator();

        expect(calculator.evaluate('4 + 4')).toBe(8);


    });

});