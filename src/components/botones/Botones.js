import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const ButtonPrimary = (props) => {
    return(
        <div className="centrado">
            <button type="button" className="btn btn-primary" >
                <Link className="link" to= {props.ruta} > { props.nombre } </Link>
            </button> 
        </div>
    )
};

export const ButtonAdd = (props) => {

    const[contador, setContador] = useState(0);

    return <div className="centrado">
        <button type="button" className="btn btn-danger contador" onClick={() => setContador(contador > 0 ? contador - 1 : contador - 0)}>-</button>
        <div className="mb-3 col-2"><input className="form-control" type="text" id={props.id} value={ contador } /></div>
        <button type="button" className="btn btn-success contador" onClick={() => setContador(contador + 1)}>+</button>
    </div>

}
