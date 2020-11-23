import { combineReducers } from 'redux';
import { postFeed } from './postFeed/reducer';

export const features = combineReducers({
  postFeed,
});
