import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/loginAction'
import { limpiarPokemones } from '../actions/pokemonesAction'

const StyldedContainer = styled.div`
        
display: flex;
justify-content: center;
color: #8d8f8f;
text-align: center;

`

export const Perfil = () => {

    const user = useSelector(store => store.login)
    const dispatch = useDispatch()

    const handleCerrarSesion = () => {
        dispatch(logout())
        dispatch(limpiarPokemones())
        localStorage.clear()
        window.location.reload()
    }


    return (
        <StyldedContainer>
            <div>
                {user.admin === 1 ?
                    <img
                        className="mt-1"
                        src="https://res.cloudinary.com/df8qzqymf/image/upload/v1638464024/Artwork_Rojo_y_Pikachu__20_aniversario_bcetni.png"
                        alt="profilePic"
                        width={150}
                    />
                    :
                    <img
                        className="mt-1"
                        src="https://www.serebii.net/smashbrosultimate/characters/icon/pokemontrainer.png"
                        alt="profilePic"
                        width={180} />
                }
                {user.admin === 1 ?
                    <h4 className="my-3 text-info">
                        <strong>
                            MAESTRO
                        </strong>
                    </h4>
                    :
                    <h4 className="mb-3 text-warning">
                        <strong>
                            ENTRENADOR
                        </strong>
                    </h4>
                }
                <h4 className="mt-4">
                    <strong className="text-dark">
                        {user.nombre.toUpperCase()}
                    </strong>
                    {"  "}{user.apellido.toUpperCase()}
                </h4>

                <h6 className="mt-2">
                    ({user.correo})
                </h6>

                <h5 className="mt-4">
                    <strong className="text-dark">
                        Edad:
                    </strong>
                    {"  "}{user.edad} años
                </h5>

                {user.admin === 1 &&
                    <div>
                        <Link to="/admin" className="btn btn-primary mt-2">
                            🔰 Admin page
                        </Link>
                    </div>
                }
                <br />
                <button
                    onClick={handleCerrarSesion}
                    className="btn btn-danger btn-block"
                >
                    Salir
                </button>



            </div>
        </StyldedContainer>
    )
}
