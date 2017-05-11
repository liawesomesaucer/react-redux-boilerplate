import {
  ADD_FEATURE,
  REMOVE_FEATURE,
} from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case ADD_FEATURE: {
      // Takes in feature, data (keyval)
      const { featureName, featureData } = action.payload;
      return { ...state, [`${featureName}`]: featureData };
    }
    case REMOVE_FEATURE: {
      // Takes in name of feature
      return { ...state, [`${action.payload}`]: null };
    }
    default: {
      return state;
    }
  }
}
