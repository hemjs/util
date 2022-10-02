import { omit } from '../src/object';

describe('object.util', () => {
  describe('omit', () => {
    it('can omit excluded props and leave non-excluded alone', () => {
      expect(omit({ a: 1, b: 2 }, ['a'])).toEqual({ b: 2 });
      expect(omit({ a: 1, b: 2, c: { d: 4 } }, ['b', 'c'])).toEqual({ a: 1 });
    });
  });
});
