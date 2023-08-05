import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import api from "../api/api";

export const ProductScreen = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [producto, setProducto] = useState([]);
  
  const obtenerProducto = async () => {
    try {
      const producto = await api.get(`/admin/producto/${params.id}`);
      setProducto(producto.data.producto);
    } catch (error) {
      if(error.response.status == 400){
        navigate('/');
      }
    }
  }

  useEffect(() => {
    obtenerProducto();
  }, []);

  return (
    <>
      <div className="container-product">
        <img src={producto.imagen} alt="" />
        <div className="">
          <span>{producto.nombre}</span>
          <span>{producto.price}</span>
          <span>{producto.detalle}</span>
          <span>Categoria: <span>{producto.categoria}</span></span>
          <button>Agregar</button>
        </div>
      </div>
    </>
  )
}
