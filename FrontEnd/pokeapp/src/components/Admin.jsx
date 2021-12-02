import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { getUsersAsincronico } from '../actions/crudAction'
import { EditAdmin } from './EditAdmin'
import { MostrarUsuarios } from './MostrarUsuarios'

const StyledContainer = styled.div`

background-color: #2F2F2F;
color: white;
height: 100%;
overflow: scroll;

`

export const Admin = () => {

    const [modoEdicion, setModoEdicion] = useState(false)
    const [usuario, setUsuario] = useState([])
    const usuarios = useSelector(state => state.usuarios.usuarios)
    const [id, setId] = useState('')
    const [error, setError] = useState(null)
    const dispatch = useDispatch()
    const history = useHistory();

    useEffect(() => {
        dispatch(getUsersAsincronico())
    }, [dispatch])


    return (<StyledContainer>
        <div className="container mt-3">
            <div className="d-flex justify-content-between">
                <h1 className="text-center">CRUD | USUARIOS</h1>
                <button
                    className="btn btn-outline-light m-2"
                    onClick={() => history.replace('/')}
                >salir</button>
            </div>
            <hr className="mb-5" />
            <div className="row">
                {modoEdicion &&
                    <div className="col-md-6 px-3">

                        <EditAdmin
                            modoEdicion={modoEdicion}
                            setModoEdicion={setModoEdicion}
                            error={error}
                            setError={setError}
                            id={id}
                            setId={setId}
                            usuario={usuario}

                        />

                    </div>
                }

                <div 
                className=
                {modoEdicion ? "col-6 pt-5 pt-md-0" : "col-12 pt-md-0 d-flex justify-content-center"}
                >
                    <MostrarUsuarios
                        modoEdicion={modoEdicion}
                        setModoEdicion={setModoEdicion}
                        setId={setId}
                        usuarios={usuarios}
                        usuario={usuario}
                        setUsuario={setUsuario}
                    />
                </div>
            </div>
        </div>
    </StyledContainer>
    )
}
