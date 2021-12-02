import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { EditAdmin } from './EditAdmin'
import { MostrarUsuarios } from './MostrarUsuarios'

const URL = 'http://localhost:4000/usuarios'

export const Admin = () => {


    const [modoEdicion, setModoEdicion] = useState(false)
    const [usuario, setUsuario] = useState([])
    const [usuarios, setUsuarios] = useState([])
    const [id, setId] = useState('')
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get(URL).then(
            res => setUsuarios(res.data)
        )
    }, [])

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
