import { types } from "../types/types"

export const pokemonesReducer = (state = {}, action) => {
    switch (action.type) {
        case types.obtenerPokemones:

            return {
                id: action.payload.id,
                pokeId: action.payload.pokeId
            }

        case types.limpiarPokemones:
            return state;

        default:
            return state;
    }
}