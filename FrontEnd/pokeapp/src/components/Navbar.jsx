import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { logout } from '../actions/loginAction'
import { limpiarPokemones } from '../actions/pokemonesAction';


const StyledContainer = styled.div`

.navbar{
    background: #B60101;
}

.navbar-brand{
    cursor:pointer;
}

.boton{
    background: white;
    border-radius: 4px;
    border: solid 2px black;
}

  }

`

export default function NavBar() {

    const history = useHistory();
    const user = useSelector(store => store.login)
    const dispatch = useDispatch()

    useEffect(() => {

    }, [dispatch, user])

    const handleLogout = () => {
        dispatch(logout())
        dispatch(limpiarPokemones())
        localStorage.clear()
        window.location.reload()
    }

    const handleMyPokemons = () => {
        history.replace('/mis-pokemones')
    }


    return (
        <StyledContainer>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid ">
                    <div
                        onClick={() => window.location.reload()}
                        className="navbar-brand">
                        <img width={120}
                            src="https://fontmeme.com/permalink/211130/3a675333ef8d5f0f0659a4ffd2b2ba38.png"
                            alt="pokeball"
                            className="me-1 mb-1" />
                    </div>
                    <div className="navbar-nav d-flex justify-content-end mb-2">

                        <div className="row my-1">
                            <div className="col-2">
                                <img
                                    width={25}
                                    height={25}
                                    src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Images.png"
                                    alt="pokeball"
                                    className="mb-2" />
                            </div>
                            <div className="col-10">
                                <span className=" text-white">
                                    {user.nombre} {user.apellido}</span>
                            </div>

                        </div>

                        <div className="d-flex justify-content-end">
                            <span onClick={handleMyPokemons} className="btn btn-outline-warning me-1">
                                Mis Pokemones
                            </span>
                            <span onClick={handleLogout} className="btn btn-outline-light">
                                salir
                            </span>
                        </div>
                    </div>

                </div>
            </nav>

        </StyledContainer>


    )
}