import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import api from "../api/api";
import Header from "../componentes/Header";
import '../css/productScreen.css'
import swal from "sweetalert";


export const ProductScreen = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [producto, setProducto] = useState([]);
  const product = {
    id_prod: producto._id,
    nombre: producto.nombre,
    imagen: producto.imagen,
    precio: producto.precio,
    cantidad: 1
  }
  const agregarACarrito = (e) => {
    e.preventDefault();
    let carritoLocalStorage = JSON.parse(localStorage.getItem('carrito'));
    if (carritoLocalStorage == null) {
      localStorage.setItem('carrito', JSON.stringify(product));
      swal("!", "Producto añadido.", "success");
    } else {
      let productoExite = carritoLocalStorage.filter((prod) => prod.id_prod == product.id_prod);
      if (productoExite.length !== 0) {
        carritoLocalStorage.forEach(prod => {
          if (prod.id == product.id) {
            prod.cantidad += 1;
          }
        });
        localStorage.setItem('carrito', JSON.stringify(carritoLocalStorage));
        swal("!", "Producto añadido.", "success");

      } else {
        carritoLocalStorage.push(product);
        localStorage.setItem('carrito', JSON.stringify(carritoLocalStorage));
        swal("!", "Producto añadido.", "success");

      }
    }
  }
  const obtenerProducto = async () => {
    try {
      const producto = await api.get(`/admin/producto/${params.id}`);
      setProducto(producto.data.producto);
    } catch (error) {
      if (error.response.status == 400) {
        navigate('/');
      }
    }
  }


  useEffect(() => {
    obtenerProducto();
  }, []);

  return (
    <>
      <Header />
      <div className="container-product">
        <img src={producto.imagen} alt="" />
        <div className="info-product">
          <span>{producto.nombre}</span>
          <span>Precio: {producto.precio}</span>
          <span>Contiene: {producto.detalle}</span>
          <span>Categoria: {producto.categoria}</span>
          <button onClick={(e) => agregarACarrito(e)}>Agregar</button>
        </div>
      </div>
      {/* <div className='comentarios'>
        <h4>Comentarios</h4>
        <div className="comentario">
          <span className='username'>Juan Cruz: </span>
          <span className='usercomment'>Muy rico!</span>
        </div>
        <form>
          <input type="text" placeholder="Comentario"/>
          <button>Enviar</button>
        </form>
      </div> */}
    </>
  )
}
