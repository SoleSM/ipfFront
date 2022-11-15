import {
    LOGIN_OKAY,
    LOGIN_FAIL,
    USER_LOADING,
    LOGOUT
} from '../actions/types';

const initialState = {
    cargando: false,
    data:[],
    error: ''
}


const LoginReducer = (state = initialState, action) => {

    const { type, payload } = action;

    console.log(payload)
    switch (type) {
        case USER_LOADING:
            return{
                ...state,
                loading: true
            }
        case LOGIN_OKAY:
            return{
                ...state,
                loading: false,
                data: payload,
                error: ''
            }
        case LOGIN_FAIL:
            return{
                loading: false,
                data: [],
                error: payload
            }
        case LOGOUT:
            return{
                loading: false,
                data: [],
                error: ''
            }
        default: return state;
    }
}

export default LoginReducer;