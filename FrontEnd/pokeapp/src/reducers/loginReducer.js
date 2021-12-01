import { types } from "../types/types"

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:

            return {
                id: action.payload.id,
                nombre: action.payload.nombre,
                apellido: action.payload.apellido,
                edad: action.payload.edad,
                correo: action.payload.correo,
                admin: action.payload.admin
            }

        case types.logout:
            return state;

        default:
            return state;
    }
}