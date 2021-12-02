import React from 'react'
import Swal from 'sweetalert2'

export const PokeCard = (props) => {

    const handleAtrapar = () => {
        const probabilidad = Math.floor(Math.random() * (100 - 1) + 1);

        if (probabilidad >= 50) {
            Swal.fire({
                imageUrl: props.pokemon.sprites.other.dream_world.front_default,
                imageWidth: 120,
                background: '#CBE8B0',
                backdrop: 'rgba(17, 17, 19, 0.973)',
                title: `Atrapaste a ${props.pokemon.name.toUpperCase()}`,
                showConfirmButton: false,
                timer: 1500
            })
            props.setRenew(props.renew + 1)
        } else {
            Swal.fire({
                imageUrl: 'https://i.pinimg.com/originals/a5/e0/05/a5e0050eef47f9fcad910e896b180a62.png',
                imageWidth: 200,
                background: '#E0AFA8',
                backdrop: 'rgba(17, 17, 19, 0.973)',
                title: `${props.pokemon.name.toUpperCase()} se ha escapado`,
                showConfirmButton: false,
                timer: 1500
            })
            props.setRenew(props.renew+ 1)
        }
    }

    return (<>

        <div className="bienvenida rounded-3 d-flex p-3 mt-3">
            {props.pokemon === null ?
                <h3 className="text-center text-light">Cargando...</h3>
                :
                <div className="card-body">
                    <img
                        src={props.pokemon.sprites.other.dream_world.front_default}
                        className="card-img-top"
                        alt="pikachu" />
                    <hr />
                    <div className="d-flex justify-content-between mt-3">
                        <h6 className="card-text text-center bg-warning p-1 rounded text-light">
                            #{props.pokemon.id}
                        </h6>
                        <h6 className="card-text text-center text-light">
                            {(props.pokemon.name).toUpperCase()}
                        </h6>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <button
                            className="btn btn-success shadow-sm"
                            onClick={handleAtrapar}
                        >Atrapar</button>
                        <button
                            className="btn btn-outline-light ms-2 shadow-sm"
                            onClick={() => props.setRenew(props.renew + 1)}
                        >Dejar pasar</button>
                    </div>
                </div>
            }
        </div>

    </>)
}
