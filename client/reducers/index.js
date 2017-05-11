import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import FilterReducer from './reducer_filter';
import FeatureReducer from './reducer_feature';
import BrushReducer from './reducer_brush';
import StackReducer from './reducer_stack';

const rootReducer = combineReducers({
  filters: FilterReducer,
  features: FeatureReducer,
  brushing: BrushReducer,
  routing: routerReducer,
  stacking: StackReducer,
});

export default rootReducer;
