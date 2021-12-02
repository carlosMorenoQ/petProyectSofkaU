import { types } from '../types/types'

export const crudReducer = (state = {}, action) => {
    switch (action.type) {

        case types.getUsuarios:
            return {
                usuarios: action.payload
            }

        default:
            return state
    }

}