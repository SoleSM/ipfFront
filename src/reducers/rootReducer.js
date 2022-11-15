import { combineReducers } from 'redux';
import LoginReducer from './auth';

export const rootReducer = combineReducers({
    login: LoginReducer
})