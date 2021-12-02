import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersAsincronico } from '../actions/crudAction'
import { EditAdmin } from './EditAdmin'
import { MostrarUsuarios } from './MostrarUsuarios'


export const Admin = () => {

  

    const [modoEdicion, setModoEdicion] = useState(false)
    const [usuario, setUsuario] = useState([])
    const usuarios = useSelector(state => state.usuarios.usuarios)
    const [id, setId] = useState('')
    const [error, setError] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersAsincronico())
    }, [dispatch])


    return (
        <div className="container mt-5">
            <div className="mb-5">
                <h1 className="text-center">CRUD | USUARIOS</h1>
                <hr />
            </div>
            <div className="row">
                {modoEdicion &&
                    <div className="col-md-6 border border-dark p-5">

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
                
                <div className={modoEdicion? "col-6 pt-5 pt-md-0" : "col-12 pt-md-0 d-flex justify-content-center"}>
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
    )
}
