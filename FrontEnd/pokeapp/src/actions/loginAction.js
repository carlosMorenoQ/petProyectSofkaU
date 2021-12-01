import { types } from '../types/types'
import axios from 'axios'

const API_URL = "http://localhost:3000/usuarios"

export const loginAsync = (email, password) => {

    return async (dispatch) => {

        axios.get(API_URL)
            .then(res => {

                const user = res.data.find(dato => dato.correo === email)

                if (user.password === password) {

                    dispatch(login(user.id, user.nombre, user.apellido, user.edad, user.correo))

                }

            })
            .catch(error => console.log(error))

    }
}

const login = (id, nombre, apellido, edad, correo) => {
    return {
        type: types.login,
        payload: {
            id,
            nombre,
            apellido,
            edad,
            correo
        }
    }
}
