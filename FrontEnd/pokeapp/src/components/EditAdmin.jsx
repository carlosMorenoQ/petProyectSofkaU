import React from 'react'
import { useForm } from '../hooks/useForm';

export const EditAdmin = (props) => {

    const [values, handleInputChange, reset] = useForm({
 
        email: props.usuario.correo,
        password: '',
        nombre: props.usuario.nombre,
        apellido: props.usuario.apellido,
        edad: props.usuario.edad
        
    })

    const {
        nombre,
        apellido,
        email,
        edad,
        password
    } = values;


    const handleEditar = (e) => {
        e.preventDefault();
        props.setError(null)
        reset();
    }


    return (
        <div>
            <form onSubmit={handleEditar} className="form mx-auto container">
                <div className="form-group mt-3 ">
                    <label htmlFor="inputEmail">
                        <strong>Correo:</strong>
                    </label>
                    <input
                        type="email"
                        id="inputEmail"
                        className="form-control mt-1 shadow-sm"
                        placeholder="ejemplo@ejemplo.com"
                        required=""
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="row mt-2 ">
                    <div className="form-group col-6">
                        <label htmlFor="inputText">
                            <strong>Nombre:</strong>
                        </label>
                        <input
                            type="text"
                            id="inputText"
                            className="form-control mt-1 shadow-sm"
                            placeholder="Nombre"
                            required=""
                            name="nombre"
                            value={nombre}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group col-6">
                        <label htmlFor="inputText">
                            <strong>Apellido:</strong>
                        </label>
                        <input
                            type="text"
                            id="inputText"
                            className="form-control mt-1 shadow-sm"
                            placeholder="Apellido"
                            required=""
                            name="apellido"
                            value={apellido}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="row mt-2 ">

                    <div className="form-group col-3">
                        <label htmlFor="inputAge">
                            <strong>Edad:</strong>
                        </label>
                        <input
                            type="number"
                            min="1"
                            max="100"
                            id="inputAge"
                            className="form-control mt-1 shadow-sm"
                            placeholder="Edad"
                            required=""
                            name="edad"
                            value={edad}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group col-9">
                        <label htmlFor="inputPassword">
                            <strong>Contraseña:</strong>
                        </label>
                        <input
                            type="password"
                            id="inputPassword"
                            className="form-control mt-1 shadow-sm"
                            placeholder=" "
                            required=""
                            name="password"
                            value={password}
                            onChange={handleInputChange}
                        />
                    </div>

                </div>

                <div className="container d-flex justify-content-center">
                    <button
                        type="submit"
                        className="btn btn-success btn-block mt-5"
                    >
                        Confirmar
                    </button>
                    <button
                        onClick={()=>props.setModoEdicion(false)}
                        className="btn btn-danger btn-block mt-5 ms-2"
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    )
}
