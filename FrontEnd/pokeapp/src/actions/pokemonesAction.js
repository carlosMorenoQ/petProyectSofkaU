import { types } from '../types/types'
import axios from 'axios'
import Swal from 'sweetalert2'

const API_URL = "http://localhost:4000/storage/"

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

export const postPokedex = (pokeId, uId) => {
    return async () => {
        axios.post(API_URL, {
            uId: uId,
            pokeId: [pokeId],
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log("fetch error")
            });
    }
}

export const putPokemon = (id, pokemones, pokeId) => {

    const pokeModificado = [...pokemones, pokeId]
    console.log(id)
    console.log(pokeModificado)

    return async (dispatch) => {
        fetch(URL + id, {
            method: "PUT",
            body: JSON.stringify(
                {   
                    pokeId: pokeModificado
                }

            ),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())

            .then(() => {

                console.log("exito")

                dispatch(obtenerPokemones())
            })
            .catch((error) =>

                console.log(error)

            )
    }
}

export const deletePokemon = (id, pokemones, pokeId) => {

    const pokeModificado = pokemones.filter(elemento => elemento !== pokeId)

    return async (dispatch) => {
        fetch(URL + id, {
            method: "PUT",
            body: JSON.stringify(
                {
                    pokeId: pokeModificado,
                    id: id
                }

            ),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())

            .then(() => {

                console.log("exito")

                dispatch(obtenerPokemones())
            })
            .catch(() =>

                console.log("fetch error")

            )
    }

}

