import { combineReducers } from 'redux';
import LoginReducer from './auth';
import publicacionesReducer from './publicaciones';
import RegisterReducer from './register';

const rootReducer = combineReducers({
    login: LoginReducer,
    register: RegisterReducer,
    publicaciones: publicacionesReducer,
})

export default rootReducer;