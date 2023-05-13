import React from "react";
import { ButtonPrimary } from "../botones/Botones";
import {useJsonReader} from '../../hooks/useJsonReader';

function ListProductos() {

    const productos = useJsonReader('/json/productos.json');

    return(
        <div className="container">
            <table className="table table-dark table-striped m-5">
                <thead>
                    <tr>
                        <th scope="col">Codigo</th>
                        <th scope="col">Nombre Producto</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Accion</th>
                    </tr>
                </thead>
                <tbody>
                {productos.map((producto) => (
                    <tr key={producto.codigo}>
                        <th scope="row">{producto.codigo}</th>
                        <td>{producto.nombre}</td>
                        <td>{producto.cantidad}</td>
                        <td>{producto.precio}</td>
                        <td>
                            <ButtonPrimary nombre="Editar Producto" ruta={"/updateProduct/"+ producto.codigo } />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <ButtonPrimary nombre="Crear Producto" ruta="/createProducts"/>
        </div>
    );
};

export default ListProductos;