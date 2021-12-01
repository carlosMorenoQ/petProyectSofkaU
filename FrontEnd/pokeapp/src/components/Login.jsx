import React, { useState } from 'react'
import styled from 'styled-components'
import { useForm } from '../hooks/useForm';
import md5 from 'md5'
import { useDispatch } from 'react-redux';
import { loginAsync } from '../actions/loginAction';

const StyldedDiv = styled.div`
        
display: flex;
justify-content: center;
margin: 0px;
padding: 5px;
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

export const Login = () => {

    const [error, setError] = useState(null)
    const dispatch = useDispatch()

    const [values, handleInputChange, reset] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = values;

    const handleLogin = (e) => {
        e.preventDefault();

        if (password === '' || email === '') {

            setError("- Campos vacios -")

        } else {

            dispatch(loginAsync(email.toLowerCase(), md5(password)))
            
            setError(null)
            reset();
        }
    }

    return (
        <StyldedDiv>

            <form onSubmit={handleLogin} className="form-signin">

                <div className="container d-flex justify-content-center">
                    <img
                        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/175.png"
                        alt="togeppi"
                    />
                </div>

                <div className="form-group mt-3">
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

                <div className="form-group mt-3">
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

                <h6 className="text-danger text-center mt-3">
                    {error ? error : '  '}
                </h6>

                <div className="container d-flex justify-content-center">
                    <button
                        type="submit"
                        className="btn btn-danger btn-block mt-3"
                    >
                        Entrar
                    </button>
                </div>

            </form>

        </StyldedDiv>
    )
}
