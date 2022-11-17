import { combineReducers } from 'redux';
import LoginReducer from './auth';
import RegisterReducer from './register';

export const rootReducer = combineReducers({
    login: LoginReducer,
    register: RegisterReducer
})