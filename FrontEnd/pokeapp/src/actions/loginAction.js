import { types } from '../types/types'
import axios from 'axios'
import Swal from 'sweetalert2'

const API_URL = "http://localhost:4000/usuarios"

export const loginAsync = (email, password) => {

    return async (dispatch) => {

        axios.get(API_URL)
            .then(res => {

                const user = res.data.find(dato => dato.correo === email)

                if (user.password === password) {

                    dispatch(login(user.id, user.nombre, user.apellido, user.edad, user.correo, user.isAdmin))

                }else{
                    Swal.fire({
                        icon: 'error',
                        backdrop: 'rgba(17, 17, 19, 0.973)',
                        title: 'Contraseña o correo invalidos',
                    })
                }

            })
            .catch(() =>
                Swal.fire({
                    icon: 'error',
                    backdrop: 'rgba(17, 17, 19, 0.973)',
                    title: 'No podemos conectarnos al servidor',
                })

            )

    }
}

const login = (id, nombre, apellido, edad, correo, admin) => {
    return {
        type: types.login,
        payload: {
            id,
            nombre,
            apellido,
            edad,
            correo,
            admin
        }
    }
}

export const logout = () => {
    return {
        type: types.logout
    }
}
