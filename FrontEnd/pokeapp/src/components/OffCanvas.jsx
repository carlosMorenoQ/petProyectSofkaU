import React from 'react'
import { Login } from './Login'
import { Register } from './Register'


export default function OffCanvas(props) {

    return (
        <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvas"
            aria-labelledby="offcanvasLabel">
            <div className="offcanvas-header">
                <img
                    width={28}
                    src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Images.png"
                    alt="pokeball"
                />
                <h5
                    className="offcanvas-title"
                    id="offcanvasExampleLabel">
                    {props.register && 'Registro'}
                    {props.login && 'Inicio de sesión'}
                </h5>
                <button type="button"
                    className="btn-close text-reset shadow-sm"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close">
                </button>
            </div>
            <div className="offcanvas-body">
                {props.register && <Register />}
                {props.login && <Login />}
            </div>
        </div>
    )
}