import {
 GET_PUBLICACIONES,
 REQUEST_FAIL,
 FETCH_PUBLICACIONES
} from "./types"

import { fetchConToken } from "../../helpers/fetch";


export const fetch_publicaciones = () => {
    return{
        type: FETCH_PUBLICACIONES
    }
}

export const request_fail = (error) => {
    return{ 
        type: REQUEST_FAIL,
        payload: error
    }
}

export const getPublicacionesOk = (data) => {
    return{
        type: GET_PUBLICACIONES,
        payload: data
    }
}
export const getPublicaciones = () => {
   
    return async (dispatch) => {

        dispatch(fetch_publicaciones());
        const res = await fetchConToken("publicaciones");
        const body = await res.json();
        console.log("body", body)

        if(body.ok){
            dispatch(getPublicacionesOk(body.publicacion))
        }else{

            dispatch(request_fail(body.msg))
        }
        

    }
}

