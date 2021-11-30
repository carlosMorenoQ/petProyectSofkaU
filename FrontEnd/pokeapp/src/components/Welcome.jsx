import React, { useState } from 'react'
import styled from 'styled-components'
import OffCanvas from './OffCanvas'

const StyledContainer = styled.div`

background: url('https://c.wallhere.com/photos/45/9a/1920x1200_px_nature_pokemon-1004643.jpg!d') no-repeat center center;
background-size: cover;
background-attachment: fixed;
height: 100%;
overflow: scroll;
position: relative;

.bienvenida{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    background: #DCECED;
    border: solid 1px black;
    box-shadow: 4px 2px 2px black;
}

a{
    text-decoration: none;
}

.card-body{
    text-align: center;
}

.card-img-top{
    width: 130px;
}

@media (min-width: 600px) {
    .card-img-top{
        width: 180px;
    }
}
    
`
export const Welcome = () => {

    const [register, setRegister] = useState(false)
    const [login, setLogin] = useState(false)

    const handleLogin = () => {
        setLogin(true)
        setRegister(false)
    }
    
    const handleRegister = () => {
        setRegister(true)
        setLogin(false)
    }
    

    return (<StyledContainer>

        <div className="bienvenida rounded-3 d-flex p-3">
            <div className="card-body">
                <img 
                src="https://cdn-icons-png.flaticon.com/512/188/188918.png" 
                className="card-img-top" 
                alt="pikachu" />
                <hr />
                <img 
                src="https://fontmeme.com/permalink/211130/3a675333ef8d5f0f0659a4ffd2b2ba38.png"
                 width={150} 
                 alt="fuente-pokemon" 
                 border="0" />
                <p className="card-text text-center mt-1">¡Bienvenido a esta aventura!</p>
                <div className="d-flex justify-content-center mt-4">
                    <a
                        data-bs-toggle="offcanvas"
                        href="#offcanvas"
                        role="button"
                        aria-controls="offcanvas"
                        className="btn-sm btn-danger shadow-sm"
                        onClick={handleRegister}
                    >Registrate</a>
                    <a
                        data-bs-toggle="offcanvas"
                        href="#offcanvas"
                        role="button"
                        aria-controls="offcanvas"
                        className="btn-sm btn-primary ms-1 shadow-sm"
                        onClick={handleLogin}
                    >Iniciar Sesion</a>
                </div>

            </div>
        </div>


        <OffCanvas register={register} login={login} />



    </StyledContainer>)
}
