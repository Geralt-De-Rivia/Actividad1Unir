import React, {useEffect, useState} from "react";
import { ButtonPrimary } from "../botones/Botones";
import { useParams } from 'react-router';

function UpdateProduct() {

    const productos = [
        {codigo:'01', nombre:'Producto1', cantidad:10, precio:10000}, 
        {codigo:'02', nombre:'Producto2', cantidad:5, precio:50000},
        {codigo:'03', nombre:'Producto3', cantidad:100, precio:2500},
        {codigo:'04', nombre:'Producto4', cantidad:100, precio: 8000},
        {codigo:'05', nombre:'Producto5', cantidad:3, precio: 1500}
    ];
    
    const codigo = useParams().id;
    const productoEncontrado = productos.find(producto => producto.codigo === codigo);

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [precio, setPrecio] = useState('');

    useEffect(() => {
        setNombre(productoEncontrado.nombre || '');
        setCantidad(productoEncontrado.cantidad || '');
        setPrecio(productoEncontrado.precio || '');
    }, [productoEncontrado]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // hacer algo con los datos del formulario
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="m-5 row">
                <div className="mb-3 col-4">
                    <label className="form-label">Nombre: </label>
                    <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="mb-3 col-4">
                    <label className="form-label">Cantidad:</label>
                    <input type="text" className="form-control" value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
                </div>
                <div className="mb-3 col-4">
                    <label className="form-label">Precio:</label>
                    <input type="email" className="form-control" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                </div>
                <ButtonPrimary nombre="Guardar" ruta="/listProducts" />
            </form>
        </div>
    );
  }
  
export default UpdateProduct;