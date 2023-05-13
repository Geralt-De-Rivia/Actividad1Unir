import React from 'react';
import { ButtonPrimary } from '../botones/Botones';
import {useJsonReader} from '../../hooks/useJsonReader';

function ListProveedores() {

    const datosTabla = useJsonReader('/json/proveedores.json')

    return (
        <div className="container">
            <table className="table table-dark table-striped m-5">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Accion</th>
                </tr>
                </thead>
                <tbody>
                {datosTabla.map((datos) => (
                    <tr key={datos.id}>
                        <td>{datos.id}</td>
                        <td>{datos.nombre}</td>
                        <td>{datos.apellido}</td>
                        <td>{datos.email}</td>
                        <td>
                            <ButtonPrimary nombre="Editar Proveedor" ruta={"/updateProveedor/"+datos.id} />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <ButtonPrimary nombre="Crear Proveedor" ruta="/createProveedor"/>
        </div>
    );
}

export default ListProveedores;

