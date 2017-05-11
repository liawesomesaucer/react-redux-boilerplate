import {
  STACK_CLUSTER,
  UNSTACK_CLUSTER,
} from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case STACK_CLUSTER: {
      const { feature, cluster, clusterData } = action.payload;
      return {
        ...state,
        [`${cluster}`]: {
          feature,
          data: clusterData,
        },
      };
    }
    case UNSTACK_CLUSTER: {
      const { clusterToRemove } = action.payload;
      const ret = { ...state };
      delete ret[clusterToRemove];
      return ret;
    }
    default: {
      return state;
    }
  }
}
