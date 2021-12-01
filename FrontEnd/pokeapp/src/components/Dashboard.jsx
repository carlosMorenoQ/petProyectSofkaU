import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Swal from 'sweetalert2'
import OffCanvas from './OffCanvas'

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
    transform: translate(-50%, -60%);
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

    const handleAtrapar = () => {
        const probabilidad = Math.floor(Math.random() * (100 - 1) + 1);

        if (probabilidad >= 50) {
            Swal.fire({
                imageUrl: pokemon.sprites.other.dream_world.front_default,
                imageWidth: 120,
                background: '#CBE8B0',
                backdrop: 'rgba(17, 17, 19, 0.973)',
                title: `Atrapaste a ${pokemon.name.toUpperCase()}`,
                showConfirmButton: false,
                timer: 1500
            })
            setRenew(renew + 1)
        } else {
            Swal.fire({
                imageUrl: 'https://i.pinimg.com/originals/a5/e0/05/a5e0050eef47f9fcad910e896b180a62.png',
                imageWidth: 200,
                background: '#E0AFA8',
                backdrop: 'rgba(17, 17, 19, 0.973)',
                title: `${pokemon.name.toUpperCase()} se ha escapado`,
                showConfirmButton: false,
                timer: 1500
            })
            setRenew(renew + 1)
        }
    }


    return (<StyledContainer>

        <div className="bienvenida rounded-3 d-flex p-3">
            {pokemon.id === undefined ?
                <h3>Cargando...</h3>
                :
                <div className="card-body">
                    <img
                        src={pokemon.sprites.other.dream_world.front_default}
                        className="card-img-top"
                        alt="pikachu" />
                    <hr />
                    <div className="d-flex justify-content-between mt-3">
                        <h6 className="card-text text-center bg-warning p-1 rounded text-light">
                            #{pokemon.id}
                        </h6>
                        <h6 className="card-text text-center text-light">
                            {(pokemon.name).toUpperCase()}
                        </h6>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <button
                            className="btn btn-success shadow-sm"
                            onClick={handleAtrapar}
                        >Atrapar</button>
                        <button
                            className="btn btn-outline-light ms-2 shadow-sm"
                            onClick={() => setRenew(renew + 1)}
                        >Dejar pasar</button>
                    </div>
                </div>
            }
        </div>


        <OffCanvas />



    </StyledContainer>)
}
