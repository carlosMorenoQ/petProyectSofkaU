import { types } from '../types/types'
import Swal from 'sweetalert2'

const URL = 'http://localhost:8080/Usuario'


export const getUsersAsincronico = () => {

    return async (dispatch) => {
        fetch('http://localhost:8080/Usuarios')
            .then(response => response.json())
            .then(usuarios => dispatch(get(usuarios.usuarios)))
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
        fetch(URL + `/Delete/${id}`, {
            method: "DELETE"
        }).then(() => {
            Swal.fire({
                icon: 'success',
                backdrop: 'rgba(17, 17, 19, 0.973)',
                title: 'Eliminado con exito',
                showConfirmButton: false,
                timer: 1500
            })

            dispatch(getUsersAsincronico())
        }).catch(() =>
            Swal.fire({
                icon: 'error',
                backdrop: 'rgba(17, 17, 19, 0.973)',
                title: 'No se pudo eliminar el usuario',
                showConfirmButton: false,
                timer: 1500
            })
        )
    }
}

export const putUser = (id, nombre, apellido, edad, correo, password) => {

    return async (dispatch) => {
        fetch(URL, {
            method: "PUT",
            body: JSON.stringify(
                {
                    id: id,
                    nombre: nombre,
                    apellido: apellido,
                    edad: edad,
                    correo: correo,
                    password: password,
                    modelRol: 0
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