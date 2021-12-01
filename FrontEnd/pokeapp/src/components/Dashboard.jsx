import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import NavBar from './Navbar'
import { PokeCard } from './PokeCard'

const StyledContainer = styled.div`

background: url('https://apptrigger.com/files/2018/08/Switch_PokemonSwordPokemonShield_screen_01_png_jpgcopy.jpg') no-repeat center center;
background-size: cover;
background-attachment: fixed;
height: 100%;
//overflow: scroll;


.bienvenida{
    position: absolute; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
    background: #C70039;
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
    width: 120px;
    background: white;
    padding: 20px;
    border: solid 2px black;
    border-radius: 50px;
}

@media (min-width: 600px) {
    .card-img-top{
        width: 180px;
    }
}
    
`
const API_URL = "https://pokeapi.co/api/v2/pokemon/"

export const Dashboard = () => {

    const [pokemon, setPokemon] = useState([])
    const [renew, setRenew] = useState(null)

    useEffect(() => {

        const random = Math.floor(Math.random() * (650 - 1) + 1);

        axios.get(API_URL + random)
            .then(res => {
                setPokemon(res.data)
            })
            .catch(error => console.log(error))

    }, [renew])

    return (<StyledContainer>

        <NavBar />

        <PokeCard 
        
        renew = {renew}
        setRenew = {setRenew}
        pokemon = {pokemon}
        
        />



    </StyledContainer>)
}
