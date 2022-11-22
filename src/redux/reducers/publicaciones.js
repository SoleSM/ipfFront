import {
 GET_PUBLICACIONES,
 FETCH_PUBLICACIONES,
 REQUEST_FAIL
} from '../actions/types'

const initialState = {
    cargando: false,
    publicaciones: [],
    error: null
}

const publicacionesReducer = ( state = initialState, action) => {

    const { type, payload } = action;

    switch(type){

        case FETCH_PUBLICACIONES:
                return{
                    ...state,
                    cargando: true
                }
        case GET_PUBLICACIONES:
                return{
                    ...state,
                    cargando: false,
                    publicaciones: payload,
                    error: null
                }
        case REQUEST_FAIL:
            return{
                ...state,
                error: payload
            }
        default: return state;
    }
}

export default publicacionesReducer;