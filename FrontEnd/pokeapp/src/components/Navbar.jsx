import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { logout } from '../actions/loginAction'
import { limpiarPokemones } from '../actions/pokemonesAction';
import OffCanvas from './OffCanvas';


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

.profile{
    cursor: pointer;
}

.profile:hover{
    transform: scale(1.02);
}

  }

`

export default function NavBar() {

    const history = useHistory();
    const user = useSelector(store => store.login)
    const [profile, setProfile] = useState(false)
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

    const handleProfile = () => {
        setProfile(true)
    }
    

    return (
        <StyledContainer>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid ">
                    <div
                        onClick={() => history.replace('/')}
                        className="navbar-brand">
                        <img width={120}
                            src="https://fontmeme.com/permalink/211130/3a675333ef8d5f0f0659a4ffd2b2ba38.png"
                            alt="pokeball"
                            className="me-1 mb-1" />
                    </div>
                    <div className="navbar-nav d-flex justify-content-end mb-2">

                        <div 
                        className="row my-1 profile"
                        onClick={handleProfile}
                        data-bs-toggle="offcanvas"
                        href="#offcanvas"
                        role="button"
                        aria-controls="offcanvas"
                        >
                            <div className="col-2">
                                <img
                                    width={25}
                                    height={25}
                                    src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Images.png"
                                    alt="pokeball"
                                    className="mb-2" />
                            </div>
                            <div className="col-10 ">
                                <span className=" text-white">
                                    <strong>
                                    {user.nombre.toUpperCase()} 
                                    </strong>
                                    {" "}{user.apellido}</span>
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

            <OffCanvas profile={profile} setProfile={setProfile}/>

        </StyledContainer>

    )
}