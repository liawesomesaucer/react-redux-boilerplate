/* eslint-disable */
// eslint is disabled to ignore import/prefer-default-export

import {
  EXAMPLE_TYPE,
} from './types';

/**
 * Action example (remove 'default' on creating more actions)
 */
export function exampleAction(data) {
  return {
    type: EXAMPLE_TYPE,
    payload: data,
  };
}
