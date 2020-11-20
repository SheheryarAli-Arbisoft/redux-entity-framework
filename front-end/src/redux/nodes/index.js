import { combineReducers } from 'redux';
import { authentication } from './authentication/reducer';
import { entities } from './entities/reducer';

export const rootReducer = combineReducers({ authentication, entities });
