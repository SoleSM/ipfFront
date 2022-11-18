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

<<<<<<< HEAD
export const fetchRegisterUser = (nombre, apellido, numeroDni, sexo, fechaDeNacimiento, email, password, tipo) => {
=======
export const fetchRegisterUser = (nombre, apellido, numeroDni, fechaDeNacimiento, email, password, sexo, tipo) => {
>>>>>>> f877b3bf2d5613606c4ef6a49996fc4c71a91c75

    return async (dispatch) => {

<<<<<<< HEAD
        console.log("llego al action")
        const res = await fetchSinToken('user/newUser', { nombre, apellido, numeroDni, sexo, fechaDeNacimiento, email, password, tipo }, 'POST');
=======
        console.log("datos", numeroDni)
        const res = await fetchSinToken('user/newUser', {nombre, apellido, numeroDni, fechaDeNacimiento, email, password, sexo, tipo}, 'POST');
>>>>>>> f877b3bf2d5613606c4ef6a49996fc4c71a91c75
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