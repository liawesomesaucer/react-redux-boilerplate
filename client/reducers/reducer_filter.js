import {
  INIT_FILTERS,
  UPDATE_FILTERS,
} from '../actions/types';

/* This is the schema for the state */
// state = {
//   data: [dataPoint], dataPoint - each entry of data
//   filters: [], filters - filters applied to data
// }

export default function (state = {}, action) {
  switch (action.type) {
    case INIT_FILTERS: {
      return {
        ...state,
        data: action.payload.data,
        filters: action.payload.filters,
      };
    }
    case UPDATE_FILTERS: {
      return {
        ...state,
        data: action.payload.data,
        filters: action.payload.filters,
      };
    }
    default: {
      return state;
    }
  }
}
