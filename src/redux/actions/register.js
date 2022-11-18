import { fetchSinToken } from '../../helpers/fetch'
import {
    REGISTER_FAIL,
    REGISTER_OKAY
} from '../actions/types'
import Swal from 'sweetalert2'

export const fetchRegOkay = (user) => {
    return{
        type: REGISTER_OKAY,
        payload: user
    }
}

export const fetchRegFail = (error) => {
    return{
        type: REGISTER_FAIL,
        payload: error
    }
}

export const fetchRegisterUser = (nombre, apellido, numeroDni, fechaDeNacimiento, email, password, sexo, tipo) => {

    return async(dispatch) => {

        console.log("datos", numeroDni)
        const res = await fetchSinToken('user/newUser', {nombre, apellido, numeroDni, fechaDeNacimiento, email, password, sexo, tipo}, 'POST');
        const body = await res.json();

        console.log("body",body)
        if(body.ok){

            //graba el token con el token que viene en el body
            localStorage.setItem('token', body.token)
            localStorage.setItem('token-creado', new Date().getTime())
        
            dispatch( fetchRegOkay({
                uid: body.user.uid
            }))
 
        }else{
            dispatch(fetchRegFail(body.msg))
            return Swal.fire('Error', body.msg, 'error')

            
        }
    }
}