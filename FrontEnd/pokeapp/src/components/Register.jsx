import React, { useState } from 'react'
import styled from 'styled-components'
import { useForm } from '../hooks/useForm';
import md5 from 'md5'
import { useDispatch } from 'react-redux';
import { registerAsync } from '../actions/registerAction';

const StyldedDiv = styled.div`
        
display: flex;
justify-content: center;
margin: 0px;
padding: 0px;
color: #8d8f8f;
text-align: left;
flex-wrap: wrap;

input{
    margin:5px 0; 
}

img{
    margin: 10px 0;
    width: 150px;
}

button{
    margin-bottom: 20px;
}

`

export const Register = () => {

    const [error, setError] = useState(null)
    const dispatch = useDispatch()

    const [values, handleInputChange, reset] = useForm({
        email: '',
        password: '',
        nombre: '',
        apellido: '',
        edad: ''
    })

    const { nombre, apellido, email, password, edad } = values;

    const handleRegister = (e) => {
        e.preventDefault();

        if (password === '' || email === '' || nombre === '' || apellido === '' || edad === '') {

            setError("- Campos vacios -")

        } else {

            console.log(
                nombre.toLowerCase(),
                apellido.toLowerCase(),
                email.toLowerCase(),
                edad, md5(password))

            dispatch(registerAsync(nombre.toLowerCase(),
                apellido.toLowerCase(),
                email.toLowerCase(),
                edad,
                md5(password)))
            setError(null)
            reset();
        }
    }


    return (
        <StyldedDiv>

            <form onSubmit={handleRegister} className="form-signin mx-auto container">

                <div className="container d-flex justify-content-center">
                    <img
                        src="https://res.cloudinary.com/df8qzqymf/image/upload/v1638371315/580b57fcd9996e24bc43c325_1_ofnsho.png"
                        alt="pikachu"
                        width={100}
                    />
                </div>

                <div className="form-group mt-3 ">
                    <label htmlFor="inputEmail">
                        <strong>Correo:</strong>
                    </label>
                    <input
                        type="email"
                        id="inputEmail"
                        className="form-control mt-1 shadow-sm"
                        placeholder="ejemplo@ejemplo.com"
                        required=""
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="row mt-2 ">
                    <div className="form-group col-6">
                        <label htmlFor="inputText">
                            <strong>Nombre:</strong>
                        </label>
                        <input
                            type="text"
                            id="inputText"
                            className="form-control mt-1 shadow-sm"
                            placeholder="Nombre"
                            required=""
                            name="nombre"
                            value={nombre}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group col-6">
                        <label htmlFor="inputText">
                            <strong>Apellido:</strong>
                        </label>
                        <input
                            type="text"
                            id="inputText"
                            className="form-control mt-1 shadow-sm"
                            placeholder="Apellido"
                            required=""
                            name="apellido"
                            value={apellido}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="row mt-2 ">

                    <div className="form-group col-3">
                        <label htmlFor="inputAge">
                            <strong>Edad:</strong>
                        </label>
                        <input
                            type="number"
                            min="1"
                            max="100"
                            id="inputAge"
                            className="form-control mt-1 shadow-sm"
                            placeholder="Edad"
                            required=""
                            name="edad"
                            value={edad}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group col-9">
                        <label htmlFor="inputPassword">
                            <strong>Contraseña:</strong>
                        </label>
                        <input
                            type="password"
                            id="inputPassword"
                            className="form-control mt-1 shadow-sm"
                            placeholder=" "
                            required=""
                            name="password"
                            value={password}
                            onChange={handleInputChange}
                        />
                    </div>

                </div>

                <h6 className="text-danger text-center mt-3">
                    {error ? error : '  '}
                </h6>

                <div className="container d-flex justify-content-center">
                    <button
                        type="submit"
                        className="btn btn-danger btn-block mt-3"
                    >
                        Registro
                    </button>
                </div>

            </form>


        </StyldedDiv>
    )
}
