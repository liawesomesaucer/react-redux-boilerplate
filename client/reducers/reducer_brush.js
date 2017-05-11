import {
  APPLY_BRUSH,
  REMOVE_BRUSH,
} from '../actions/types';

/**
 * This is the schema for the reducer:
 * state = {
 *  data: [Object],  -   The brushed data
 *  filter: Object,  - The filter for the feature being brushed
 * }
 */

export default function (state = {}, action) {
  switch (action.type) {
    case APPLY_BRUSH: {
      return {
        ...state,
        data: action.payload.data,
        filter: action.payload.filter,
        brush: true,
      };
    }
    case REMOVE_BRUSH: {
      return {
        ...state,
        data: action.payload.data,
        filter: action.payload.filter,
        brush: false,
      };
    }
    default: {
      return state;
    }
  }
}
