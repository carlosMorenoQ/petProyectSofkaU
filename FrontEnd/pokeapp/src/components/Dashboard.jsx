import React, { useState } from 'react'
import styled from 'styled-components'
import OffCanvas from './OffCanvas'

const StyledContainer = styled.div`

background: url('https://apptrigger.com/files/2018/08/Switch_PokemonSwordPokemonShield_screen_01_png_jpgcopy.jpg') no-repeat center center;
background-size: cover;
background-attachment: fixed;
height: 100%;
//overflow: scroll;
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
export const Dashboard = () => {

    
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
                    <button
                        
                        className="btn btn-danger shadow-sm"
                        // onClick={}
                    >Tómalo</button>
                    <button
                        
                        className="btn btn-outline-primary ms-1 shadow-sm"
                        // onClick={}
                    >Dejarlo pasar</button>
                </div>

            </div>
        </div>


        <OffCanvas />



    </StyledContainer>)
}
