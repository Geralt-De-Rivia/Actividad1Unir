import React, {useState} from "react";
import { ButtonPrimary } from "../botones/Botones";

export const FormProductos = () => {
    const productObject = {
        nombre: '',
        cantidad: '',
        precio: '',
    }
    const [product, setProduct] = useState(productObject);

    const handleChange = e => {    
        const { name, value } = e.target;
        setProduct(prevProduct => ({
          ...prevProduct,
          [name]: value
        }));
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(product);
        // hacer algo con los datos del formulario
    };

    return(
        <div className="container">
            <form className="m-5 row" onSubmit={handleSubmit}>
                <div className="mb-3 col-4">
                    <label className="form-label">Nombre: </label>
                    <input className="form-control" type="text" name="nombre" placeholder="Nombre Producto" onChange={handleChange}/>
                </div>
                <div className="mb-3 col-4">
                    <label className="form-label">Cantidad:</label>
                    <input className="form-control" type="number" name="cantidad" placeholder="cantidad Producto" onChange={handleChange}/>
                    
                </div>
                <div className="mb-3 col-4">
                    <label className="form-label">Precio:</label>
                    <input className="form-control" type="number" name="precio" placeholder="Precio Producto" onChange={handleChange}/>
                </div>
                <ButtonPrimary nombre="Guardar" ruta="/listProducts" />
            </form>
        </div>
    )
};