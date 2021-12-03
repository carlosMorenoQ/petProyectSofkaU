import { types } from '../types/types'
import axios from 'axios'

const API_URL = "http://localhost:8080/Storage/"

export const obtenerPokemonesAsync = (id) => {

    return async (dispatch) => {

        axios.get(API_URL + id)
            .then(res => {
                dispatch(obtenerPokemones(res.data.usuarioId, res.data.pokeId))

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

export const postPokemon = (uId, pokeId) => {

    return async (dispatch) => {
        axios.post(API_URL + "savePokemon", {
            idStorage: null,
            pokeId: pokeId,
            modelCuenta: uId
        })
            .then(function () {
                dispatch(obtenerPokemonesAsync(uId))
            })
            .catch(function (error) {
                console.log(error)
            });
    }
}


export const deletePokemon = (id, pokeId) => {
    return async (dispatch) => {
        axios.delete(API_URL+`Delete/${pokeId}/${id}`)
            .then(() => dispatch(obtenerPokemonesAsync(id)))
            .catch((error) => console.log(error))

    }

}

