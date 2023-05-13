import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import App from '../App';
import { FormProductos } from "../components/productos/FormProductos";
import ListProductos from "../components/productos/ListProductos";
import UpdateProduct from "../components/productos/UpdateProducto";
import ListProveedores from "../components/proveedores/ListProveedores";
import UpdateProveedor from "../components/proveedores/UpdateProveedor";
import NotFound from "../components/errores/NotFound";
import { FormProveedores } from "../components/proveedores/FormProveedores";

export const AppRouter = () =>{
    return(
        <BrowserRouter>
            <div>
                <Routes>
                    <Route exact path="/" element={<App />} />
                    <Route exact path="/listProducts" element={<ListProductos />} />
                    <Route exact path="/createProducts" element={<FormProductos />} />
                    <Route exact path="/updateProduct/:id" element={<UpdateProduct />} />
                    <Route exact path="/listProveedores" element={<ListProveedores />} />
                    <Route exact path="/createProveedor" element={<FormProveedores />} />
                    <Route exact path="/updateProveedor/:id" element={<UpdateProveedor />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}