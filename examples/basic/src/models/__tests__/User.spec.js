// Models
import { describe, it, expect } from 'vitest';
import { set } from 'vitest-plugin-set';
import { context } from 'vitest-plugin-context';

import User from '../User';

/* global firstName, lastName, user */
describe('User', () => {
  set('firstName', () => 'Joe');
  set('lastName', () => 'Wilson');
  set('user', () => new User({firstName, lastName}));

  describe('#getFirstName', () => {
    it('should return the firstName', () => {
      expect(user.getFirstName()).toEqual('Joe');
    });
  });

  describe('#getLastName', () => {
    it('should return the lastName', () => {
      expect(user.getLastName()).toEqual('Wilson');
    });
  });

  describe('#getName', () => {
    it('returns the combined name', () => {
      expect(user.getName()).toEqual('Joe Wilson');
    });

    context('when no last name is provided', () => {
      set('lastName', () => null);

      it('returns the first name', () => {
        expect(user.getName()).toEqual('Joe');
      });
    });
  });
});
