import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { obtenerPokemonesAsync } from '../actions/pokemonesAction'
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
    transform: translate(-50%, -50%);
    background: #C70039;
    border: solid 1px black;
    box-shadow: 4px 2px 2px black;
    border-radius: 20px 0;
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
    border: solid 1px black;
    border-radius: 20px 0;
}

`
const API_URL = "https://pokeapi.co/api/v2/pokemon/"

export const Dashboard = () => {

    const user = useSelector(store => store.login)
    const [pokemon, setPokemon] = useState(null)
    const [renew, setRenew] = useState(null)
    const dispatch = useDispatch()
  

    useEffect(() => {

        const random = Math.floor(Math.random() * (650 - 1) + 1);

        axios.get(API_URL + random)
            .then(res => {
                setPokemon(res.data)
            })
            .catch(error => console.log(error))

    }, [renew])

    useEffect(() => {

        dispatch(obtenerPokemonesAsync(user.id))

    }, [dispatch, user])

    return (<StyledContainer>

        <NavBar />

        <PokeCard 
        
        renew = {renew}
        setRenew = {setRenew}
        pokemon = {pokemon}
        
        />



    </StyledContainer>)
}
