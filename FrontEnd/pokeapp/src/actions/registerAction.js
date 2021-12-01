import axios from 'axios'
import Swal from 'sweetalert2'

const API_URL = "http://localhost:4000/usuarios"

export const registerAsync = (nombre, apellido, email, edad, password) => {

    return async (dispatch) => {

        axios.get(API_URL)
            .then(res => {

                const user = res.data.find(dato => dato.correo === email)

                if (user) {

                    Swal.fire({
                        icon: 'error',
                        background: '#E0AFA8',
                        backdrop: 'rgba(17, 17, 19, 0.973)',
                        title: `Ya existe un usuario registrado con el correo ${email}`,
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else {
                    dispatch(register(nombre, apellido, email, edad, password))
                }

            })
            .catch(error => console.log(error))

    }

}

const register = (nombre, apellido, email, edad, password) => {

    return async () => {
        axios.post(API_URL, {
            isAdmin: 0,
            nombre: nombre,
            apellido: apellido,
            edad: edad,
            correo: email,
            password: password
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}


