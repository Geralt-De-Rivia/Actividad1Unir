import React, {useEffect, useState} from "react";
import { ButtonPrimary } from "../botones/Botones";
import { useParams } from 'react-router';

function UpdateProduct() {

    const id = useParams().id;

    const proveedores = [
        {id:"1118557622", nombre:"William", apellido:"mahecha", email:"wsmh99@hotmail.com"},
        {id:"1101695437", nombre:"Ingrid", apellido:"Flechas", email:"ingrid@hotmail.com"},
        {id:"123456789", nombre:"Jorge", apellido:"Cantillo", email:"jorge@hotmail.com"}
    ];

    const proveedorEncontrado = proveedores.find(proveedor => proveedor.id === id);

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        setNombre(proveedorEncontrado.nombre || '');
        setApellido(proveedorEncontrado.apellido || '');
        setEmail(proveedorEncontrado.email || '');
    }, [proveedorEncontrado]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // hacer algo con los datos del formulario
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="m-5 row">
                <div className="mb-3 col-4">
                    <label className="form-label">Nombre:</label>
                    <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="mb-3 col-4">
                    <label className="form-label">Apellido:</label>
                    <input type="text" className="form-control" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div className="mb-3 col-4">
                    <label className="form-label">Email:</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <ButtonPrimary nombre="Guardar" ruta="/listProveedores" />
            </form>
        </div>
    );
  }
  
export default UpdateProduct;