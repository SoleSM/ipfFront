import { combineReducers } from 'redux';
import LoginReducer from './auth';
import RegisterReducer from './register';

const rootReducer = combineReducers({
    login: LoginReducer,
    register: RegisterReducer,
})

export default rootReducer;