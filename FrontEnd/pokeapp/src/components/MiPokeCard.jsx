import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const URL ='https://pokeapi.co/api/v2/pokemon/'

const StyledDiv = styled.div`

    .card{
        border-radius: 0 20px;
        list-style: none;
        font-size: 1.5rem;
        border: solid 1px black;
        padding: 10px;
        background-color: #FF0A17;
    }

    .cont{
        display: flex;
        justify-content: center;
    }

    .cont2{
        margin-left: 15px;
    }

    .imagen{
        border: solid 2px #1C1C1C;
        border-radius: 10px;
        background-color: white;
    }

    .titulo{
        margin-top: 5px;
        display: flex;
        justify-content: center;
    }

    .titulo h5{
        margin-right: 0px;
        text-align: right;
        width: 150px;
    }

    .titulo p{
        font-size: 14px;
        height: auto;
        color: white;
        background: gray;
        border-radius: 4px;
        padding: 3px;
    }

    .titulo2{
        display: flex;
        justify-content: center;
    }

    .titulo2 h5{
        width: 150px;
    }

    .titulo2 span{
        font-size: 18px;
        margin-right: 0px;
        text-align: right;
        width: 100px;
        height: 60px;
        color: white;
    }

 
    @media (min-width: 600px) {

        .card{
            border-radius: 0 20px;
            opacity: 0.92;
            list-style: none;
            font-size: 1.5rem;
            border: solid 1px black;
            padding: 10px;
            background-color: #C52C2F;
        }

        .card:hover{
            transform: scale(1.03);
        }

      }

`
export default function MiPokeCard(props) {

    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {

        axios.get(URL+props.id)
            .then(res => setPokemon(res.data))

    }, [props.id]);

    return (<StyledDiv>
        {pokemon &&
            <li className="card">

                <div className="cont">

                    <img 
                    width={140} 
                    height={150} 
                    className="imagen" 
                    src={pokemon.sprites.front_default} 
                    alt={pokemon.name} />
                
                    <div className="cont2">
                        <h4 className="text-primary">⦿</h4>
                        <h4 className="text-dark">⊙</h4>
                    </div>
                </div>

                <div className="titulo">
                    <p className="fw-bold">#{pokemon.id}</p>

                    <h5 className="text-warning">{pokemon.name.toUpperCase()}</h5>
                </div>


                <div className="titulo2">
                    <h5 className="text-dark">Type: </h5>
                    < span className="fw-bold"> 
                    {pokemon.types.map(tipos => tipos.type.name).join("\n")}
                    </span>
                </div>

            </li>
        }
    </StyledDiv >)
}
