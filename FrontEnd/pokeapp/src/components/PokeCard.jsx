import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { postPokemon } from '../actions/pokemonesAction'

export const PokeCard = (props) => {

    const pokedex = useSelector(store => store.pokemones)
    const user = useSelector(store => store.login)
    const dispatch = useDispatch()

    const handleAtrapar = (pokemonId) => {

        const probabilidad = Math.floor(Math.random() * (100 - 1) + 1);

        if (pokedex.pokeId.length >= 6) {
            Swal.fire({
                imageUrl: 'https://img.icons8.com/color/480/pokedex.png',
                imageWidth: 250,
                background: '#E0AFA8',
                backdrop: 'rgba(17, 17, 19, 0.973)',
                title: '"no tienes espacio en la Pokedex"',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            if (probabilidad >= 50) {
                dispatch(postPokemon(user.id, pokemonId))
                Swal.fire({
                    imageUrl: 'https://res.cloudinary.com/df8qzqymf/image/upload/v1638485977/dadhznk-3a51975c-49a0-4049-97e9-1eee7e8517d9_k0tvpk.png',
                    imageWidth: 300,
                    background: '#CBE8B0',
                    backdrop: 'rgba(17, 17, 19, 0.973)',
                    title: `Atrapaste a ${props.pokemon.name.toUpperCase()}`,
                    showConfirmButton: false,
                    timer: 1500
                })
                props.setRenew(props.renew + 1)
            } else {
                Swal.fire({
                    imageUrl: 'https://i.pinimg.com/originals/a5/e0/05/a5e0050eef47f9fcad910e896b180a62.png',
                    imageWidth: 200,
                    background: '#E0AFA8',
                    backdrop: 'rgba(17, 17, 19, 0.973)',
                    title: `${props.pokemon.name.toUpperCase()} se ha escapado`,
                    showConfirmButton: false,
                    timer: 1500
                })
                props.setRenew(props.renew + 1)
            }
        }
    }

    return (<>

        <div className="bienvenida d-flex p-2 mt-3">
            {props.pokemon === null ?
                <h3 className="text-center text-light">Cargando...</h3>
                :
                <div className="card-body">
                    <img
                        src={props.pokemon.sprites.other.dream_world.front_default}
                        className="card-img-top"
                        alt="pikachu" />
                    <hr />
                    <div className="d-flex justify-content-between mt-3">
                        <h6 className="card-text text-center bg-warning p-1 rounded text-light">
                            #{props.pokemon.id}
                        </h6>
                        <h6 className="card-text text-center text-light">
                            {(props.pokemon.name).toUpperCase()}
                        </h6>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <button
                            className="btn btn-success shadow-sm"
                            onClick={() => handleAtrapar(props.pokemon.id)}
                        >Atrapar</button>
                        <button
                            className="btn btn-outline-light ms-2 shadow-sm"
                            onClick={() => props.setRenew(props.renew + 1)}
                        >Dejar</button>
                    </div>
                </div>
            }
        </div>

    </>)
}
