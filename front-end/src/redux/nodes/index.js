import { combineReducers } from 'redux';
import { authentication } from './authentication/reducer';
import { features } from './features/reducer';
import { entities } from './entities/reducer';

export const rootReducer = combineReducers({
  authentication,
  features,
  entities,
});
