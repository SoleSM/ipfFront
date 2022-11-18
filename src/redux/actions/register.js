import { fetchSinToken } from '../../helpers/fetch'
import {
    REGISTER_FAIL,
    REGISTER_OKAY
} from '../actions/types'
import Swal from 'sweetalert2'

export const fetchRegOkay = (user) => {
    return {
        type: REGISTER_OKAY,
        payload: user
    }
}

export const fetchRegFail = (error) => {
    return {
        type: REGISTER_FAIL,
        payload: error
    }
}

export const fetchRegisterUser = (nombre, apellido, numeroDni, sexo, fechaDeNacimiento, email, password, tipo) => {

    return async (dispatch) => {

        console.log("llego al action")
        const res = await fetchSinToken('user/newUser', { nombre, apellido, numeroDni, sexo, fechaDeNacimiento, email, password, tipo }, 'POST');
        const body = await res.json();

        console.log("body desde el action=> ", body)

        if (body.ok) {
            console.log("ok")
            //graba el token con el token que viene en el body
            localStorage.setItem('token', body.token)
            localStorage.setItem('token-creado', new Date().getTime())

            dispatch(fetchRegOkay({
                uid: body.usuario.uid,
                nombre: body.usuario.nombre
            }))

        } else {
            console.log("entro a error")
            dispatch(fetchRegFail(body.msg))
            return Swal.fire('Error', body.msg, 'error')

        }
    }
}