import React from 'react'
import styled from 'styled-components'

const StyldedContainer = styled.div`

display: flex;
justify-content: center;
color: #8d8f8f;
text-align: center;
`

export const MostrarUsuarios = (props) => {

    const handleEdicion = item => {
        props.setModoEdicion(true)
        props.setUsuario(item)
        props.setId(item.id)
    }

    const handleEliminarTarea = id => {

        

    }

    return (
        <div>
            <h4 className="text-center">{props.modoEdicion ? 'Editando a:' : 'Usuarios'}</h4>
            <ul className="list-group list-group-flush">
                {
                    props.usuarios === undefined || (props.usuarios).length === 0 ? (
                        <h6 className="text-center mt-3">- Sin Usuarios -</h6>
                    ) :
                        props.modoEdicion ?

                            <StyldedContainer>
                                <div className="container">
                                    <img
                                        className="mt-1"
                                        src="https://www.serebii.net/smashbrosultimate/characters/icon/pokemontrainer.png"
                                        alt="profilePic"
                                        width={180} />

                                    <h4 className="mb-3 text-warning">
                                        <strong>
                                            ENTRENADOR
                                        </strong>
                                    </h4>

                                    <h4 className="mt-4">
                                        <strong className="text-dark">
                                            {props.usuario.nombre.toUpperCase()}
                                        </strong>
                                        {"  "}{props.usuario.apellido.toUpperCase()}
                                    </h4>

                                    <h6 className="mt-2">
                                        ({props.usuario.correo})
                                    </h6>

                                    <h5 className="mt-4">
                                        <strong className="text-dark">
                                            Edad:
                                        </strong>
                                        {"  "}{props.usuario.edad} años
                                    </h5>
                                </div>
                            </StyldedContainer>

                            :
                            (props.usuarios).map(item => (
                                <li className="list-group-item" key={item.id}>
                                    <div className="row">
                                        <div className="col-7 p-3">
                                            <span className="h6">{item.correo}</span>
                                        </div>

                                        {item.isAdmin === 1 ?
                                            <div className="col-5 p-3 justify-content-center">
                                                <h6>🔰 Administrador</h6>
                                            </div>
                                            :
                                            !props.modoEdicion &&
                                            <div className="col-5 p-3 justify-content-center">
                                                <button
                                                    className="btn btn-sm btn-danger "
                                                    onClick={() => handleEliminarTarea(item.id)}
                                                >Eliminar</button>
                                                <button
                                                    className="btn btn-sm btn-warning ms-1"
                                                    onClick={() => handleEdicion(item)}
                                                >Editar</button>
                                            </div>
                                        }
                                    </div>

                                </li>
                            ))

                }
            </ul>
        </div>
    )
}
