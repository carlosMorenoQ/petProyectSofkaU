import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { obtenerPokemonesAsync } from '../actions/pokemonesAction'
import MiPokeCard from './MiPokeCard'
import NavBar from './Navbar'

const StyledContainer = styled.div`

background: url('https://wallpaperaccess.com/full/194932.jpg') no-repeat center center;
background-size: cover;
background-attachment: fixed;
height: 100%;
overflow: scroll;

    .imagenGrid{
        display: grid;
        grid-template-columns: repeat(auto-fill, 200px);
        gap: 40px;
        padding: 40px;
        justify-content: center;
    }

    @media (min-width: 600px) {
        background: url('https://cdn.wallpapersafari.com/77/10/wFzJro.png') no-repeat center center;
        background-size: cover;
        background-attachment: fixed;

      }
`

export const MisPokemones = () => {
    const user = useSelector(store => store.login)
    const dispatch = useDispatch()
    const pokemon = useSelector(store => store.pokemones.pokeId)

    useEffect(() => {

        dispatch(obtenerPokemonesAsync(user.id))

    }, [dispatch, user])

    return (<StyledContainer>

        <NavBar />
        
        <ul className="imagenGrid">
            {pokemon &&
                pokemon.map(id =>
                    <MiPokeCard 
                    key={id} 
                    id={id} 
                    userId = {user.id}
                    />
                )
            }
        </ul>
    </StyledContainer>

    )
}
