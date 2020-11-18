import { combineReducers } from 'redux';
import { posts } from './posts/reducer';

export const entities = combineReducers({ posts });
