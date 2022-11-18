
import Swal from 'sweetalert2';
import { fetchSinToken } from '../../helpers/fetch';

import {
    LOGIN_FAIL,
    LOGIN_OKAY,
    USER_LOADING,
} from './types';

export const fetchUsuarioLoading = () => {
    return{
        type: USER_LOADING
    }
}

export const fetchLoginOkay = (user) => {
    return{
        type: LOGIN_OKAY,
        payload: user
    }
}

export const fetchLoginError = (error) => {
    return{
        type: LOGIN_FAIL,
        payload: error
    }
}

export const login = (email, password) => {

    return async( dispatch ) => {
        
        const res = await fetchSinToken('user/login',{email, password}, 'POST');
        const body = await res.json()

        if(body.ok){
            //graba el token con el token que viene en el body
            localStorage.setItem('token', body.token)
            localStorage.setItem('token-creado', new Date().getTime())

            dispatch( fetchLoginOkay({
                uid: body.usuario.uid,
                nombre: body.usuario.nombre
            }))
 
        }else{

            dispatch(fetchLoginError(body.msg))
            return Swal.fire('Error', body.msg, 'error')

        }
    }
}

