import {
    LOGIN_OKAY,
    LOGIN_FAIL,
    LOGOUT
} from '../actions/types';

const initialState = {
    cargando: false,
    autenticado: false,
    user: {},
    error: ''
}


const LoginReducer = (state = initialState, action) => {

    const { type, payload } = action;
    
    switch (type) {
        case LOGIN_OKAY:
            return{
                ...state,
                cargando: false,
                autenticado: true,
                user: payload,
                error: ''
            }
        case LOGIN_FAIL:
            return{
                ...state,
                cargando: false,
                autenticado: false,
                user:{},
                error: payload
            }
        case LOGOUT:
            return{
                ...state,
                cargando: false,
                autenticado: false,
                user: {},
                error: ''
            }
        default: return state;
    }
}

export default LoginReducer;