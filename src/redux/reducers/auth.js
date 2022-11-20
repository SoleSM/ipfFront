import {
    LOGIN_OKAY,
    LOGIN_FAIL,
    LOGOUT,
    CHECKING_FINISH
} from '../actions/types';

const initialState = {
    cargando: false,
    autenticado: false,
    user: {},
    error: null
}


const LoginReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case LOGIN_OKAY:
            return {
                ...state,
                ...payload,
                cargando: false,
                autenticado: true,
                user: payload,
                error: null
            }
        case LOGIN_FAIL:
            return {
                ...state,
                ...payload,
                cargando: false,
                autenticado: false,
                user: {},
                error: payload
            }
        case CHECKING_FINISH:
            return {
                ...state,
                ...payload,
                cargando: false
            }
        case LOGOUT:
            return {
                ...state,
                ...payload,
                cargando: false,
                autenticado: false,
                user: {},
                error: null
            }
        default: return state;
    }
}

export default LoginReducer;