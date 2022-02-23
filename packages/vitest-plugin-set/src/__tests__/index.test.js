import {describe, it, expect} from 'vitest';
import {set} from '../index';

describe('vitest-plugin-set', () => {
  /* global a, b, c */
  set('a', () => 1);
  set('b', () => 2);
  set('c', () => 'hello world');

  describe('variables set to primitives', () => {
    it('sets a', () => {
      expect(a).toEqual(1);
    });

    it('sets b', () => {
      expect(b).toEqual(2);
    });

    it('sets c', () => {
      expect(c).toEqual('hello world');
    });
  });

  describe('variables set to arrays', () => {
    set('a', () => [1, 2, 3]);

    it('properly set arrays', () => {
      expect(a).toEqual([1, 2, 3]);
    });
  });

  describe('variables set to objects', () => {
    set('b', () => ({test: '1', value: 2, other: 'three'}));

    it('properly set objects', () => {
      expect(b).toEqual({other: 'three', value: 2, test: '1'});
    });
  });

  describe('nested set calls', () => {
    set('a', () => 10);

    it('takes the inner set', () => {
      expect(a).toEqual(10);
    });
  });

  describe('variables set within other set calls', () => {
    set('b', () => a + 10);

    it('evaluates outer variables', () => {
      expect(b).toEqual(11);
    });

    it('is able to reference variables from the outer scope', () => {
      expect(c).toEqual('hello world');
    });
  });
});
