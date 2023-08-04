import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import api from "../api/api";
export const ProductScreen = () => {

  const params = useParams();

  const [producto, setProducto] = useState([]);
  
  const obtenerProducto = async () => {
    try {
      const producto = await api.get(`/admin/producto/${params.id}`);
      setProducto(producto.data.producto);
      console.log(producto)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    obtenerProducto();
  }, []);

  return (
    <>
    <h1>{params.id}</h1>
      <div className="container-product">
        <img src={producto.imagen} alt="" />
        <div className="">
          <span>{producto.nombre}</span>
          <span>{producto.price}</span>
          <span>Categoria: <span>{producto.categoria}</span></span>
          <button>Agregar</button>
        </div>
      </div>
    </>
  )
}
