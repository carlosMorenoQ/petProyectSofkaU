import { types } from '../types/types'
import Swal from 'sweetalert2'

const URL = 'http://localhost:4000/usuarios/'


export const getUsersAsincronico = () => {

    return async (dispatch) => {
        fetch(URL)
            .then(response => response.json())
            .then(usuarios => dispatch(get(usuarios)))
    }
}

export const get = (users) => {

    return {
        type: types.getUsuarios,
        payload: users
    }
}


export const deleteUser = (id) => {

    return async (dispatch) => {
        fetch(URL + id, {
            method: "DELETE"
        }).then(() => dispatch(getUsersAsincronico()))
    }
}



export const putUser = (id, nombre, apellido, edad, correo, password) => {

    return async (dispatch) => {
        fetch(URL + id, {
            method: "PUT",
            body: JSON.stringify(
                {
                    isAdmin: 0,
                    nombre: nombre,
                    apellido: apellido,
                    edad: edad,
                    correo: correo,
                    password: password,
                    id: id,
                }

            ),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())

            .then(() => {

                Swal.fire({
                    icon: 'success',
                    backdrop: 'rgba(17, 17, 19, 0.973)',
                    title: 'Modificacion exitosa',
                    showConfirmButton: false,
                    timer: 1500
                })

                dispatch(getUsersAsincronico())
            })
            .catch(() =>
                Swal.fire({
                    icon: 'error',
                    backdrop: 'rgba(17, 17, 19, 0.973)',
                    title: 'No se pudo modificar el usuario',
                    showConfirmButton: false,
                    timer: 1500
                })
            )
    }
}