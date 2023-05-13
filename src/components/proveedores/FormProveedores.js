import React, {useState} from "react";
import { ButtonPrimary } from "../botones/Botones";

export const FormProveedores = () => {

    const proveedorObject = {
        nombre: '',
        apellido: '',
        email: '',
    }
    const [proveedor, setProveedor] = useState(proveedorObject);

    const handleChange = e => {    
        const { name, value } = e.target;
        setProveedor(prevProveedor => ({
          ...prevProveedor,
          [name]: value
        }));
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(proveedor)
        // hacer algo con los datos del formulario
    };

    return(
        <div className="container">
            <form className="m-5 row" onSubmit={handleSubmit}>
                <div className="mb-3 col-4">
                    <label className="form-label">Nombre: </label>
                    <input className="form-control" type="text" name="nombre" placeholder="Nombre Proveedor" onChange={handleChange}  />
                </div>
                <div className="mb-3 col-4">
                    <label className="form-label">Apellido:</label>
                    <input className="form-control" type="text" name="apellido" placeholder="Apellido Proveedor" onChange={handleChange} />
                </div>

                <div className="mb-3 col-4">
                    <label className="form-label">Email:</label>
                    <input className="form-control" type="email" name="email" placeholder="Email Proveedor" onChange={handleChange} />
                </div>
                <ButtonPrimary nombre="Guardar" ruta="/listProveedores" />
            </form>
        </div>
    )
};