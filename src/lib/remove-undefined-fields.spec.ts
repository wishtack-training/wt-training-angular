import { removeUndefinedFields } from './remove-undefined-fields';

describe('removeUndefinedFields', () => {

  it('should remove undefined fields', () => {

    expect(removeUndefinedFields({
      a: 1,
      b: null,
      c: undefined
    })).toEqual({
      a: 1,
      b: null
    });

  });

});
