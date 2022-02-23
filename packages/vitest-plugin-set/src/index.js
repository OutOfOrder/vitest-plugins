import {beforeEach, afterEach} from "vitest";

import {define, undefine} from './utils';

/**
 * 'set' allows us to lazily evaluate blocks and override them within
 * different 'describe' blocks.
 */
export const set = (name, block) => {
  beforeEach(() => {
    define({scope: global, name, block});
  });

  afterEach(() => {
    undefine({scope: global, name});
  });
};
