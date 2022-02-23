import {describe, it, expect} from 'vitest';
import {context} from '../index';

describe('vitest-plugin-context', () => {
  context('with context', () => {
    it('runs tests normally', () => {
      expect(1 + 1).toEqual(2);
    });
  });
});
