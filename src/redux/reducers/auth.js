import {
    LOGIN_OKAY,
    LOGIN_FAIL,
    LOGOUT,
    CHECKING_FINISH,
    FETCH_LOGIN
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
        case FETCH_LOGIN:
            return{
                ...state,
                cargando: true
            }
        case LOGIN_OKAY:
            return {
                ...state,
                cargando: false,
                autenticado: true,
                user: payload,
                error: null
            }
        case LOGIN_FAIL:
            return {
                ...state,
                error: payload
            }
        case LOGOUT:
            return {
                ...state,
                autenticado: false,
                user: {}
            }
        case CHECKING_FINISH:
            return{
                ...state,
                cargando: false
            }
        default: return state;
    }
}

export default LoginReducer;