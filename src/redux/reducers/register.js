import {
    REGISTER_FAIL,
    REGISTER_OKAY
} from '../actions/types';

const initialState = {

    user: {},
    error: ''
}

const RegisterReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch(type){
        case REGISTER_OKAY:
           console.log("etate",state)
            return{
                ...state,
                user: payload,
                error: ''
            }
        case REGISTER_FAIL:
            return{
                ...state,
                user: {},
                error: payload
            }
        default: return state;
    }
}

export default RegisterReducer;