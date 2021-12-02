import { types } from '../types/types'
import axios from 'axios'

const API_URL = "http://localhost:4000/storage"

export const obtenerPokemonesAsync = (id) => {

    return async (dispatch) => {

        axios.get(API_URL)
            .then(res => {

                const pokemones = res.data.find(dato => dato.uId === id)

                if (pokemones) {

                    dispatch(obtenerPokemones(pokemones.id, pokemones.pokeId))

                }

            })
            .catch(error => console.log(error))

    }
}

const obtenerPokemones = (id, pokeId) => {
    return {
        type: types.obtenerPokemones,
        payload: {
            id,
            pokeId
        }
    }
}

export const limpiarPokemones = () => {
    return {
        type: types.limpiarPokemones
    }
}
