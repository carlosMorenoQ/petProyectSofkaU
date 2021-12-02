import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { loginReducer } from '../reducers/loginReducer'
import thunk from 'redux-thunk';
import { guardarLocalStorage, obtenerLocalStorage } from '../localStorage';
import { pokemonesReducer } from '../reducers/pokemonesReducer';
import { crudReducer } from '../reducers/crudReducer';

const reducers = combineReducers({

  login: loginReducer,
  pokemones: pokemonesReducer,
  usuarios: crudReducer
  
})

const composeEnhancers = (typeof window !== 'undefined' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const storageState = obtenerLocalStorage();

export const store = createStore(
  reducers,
  storageState,
  composeEnhancers(
    applyMiddleware(thunk))

)

store.subscribe(() => {
  guardarLocalStorage({
    login: store.getState().login
  })
})