import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import api from "../api/api";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import '../css/productScreen.css'
import swal from "sweetalert";


export const ProductScreen = () => {
  const navigate = useNavigate();
  const params = useParams();
  const user = JSON.parse(localStorage.getItem('user'));
  const [producto, setProducto] = useState([]);
  const [comentarios, setComentarios] = useState([]);
  const [username, setUsername] = useState(user.nombre);
  const [texto, setTexto] = useState('');

  const product = {
    id_prod: producto._id,
    nombre: producto.nombre,
    imagen: producto.imagen,
    precio: producto.precio,
    cantidad: 1
  }

  const obtenerComentarios = async () => {
    try {
      const resp = await api.get(`/comentarios/comentarios/${params.id}`);
      setComentarios(resp.data.comentarios);
    } catch (error) {
      console.log(error)
    }
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

  const comentar = async (e) => {
    e.preventDefault();
    let date = new Date();
    let horas = '';
    let minutos = '';
    if(date.getHours() < 10){
      horas = '0' + date.getHours();
    }else{
      horas = date.getHours();
    }
    if(date.getMinutes() < 10){
      minutos = '0' + date.getMinutes();
    }else{
      minutos = date.getMinutes();
    }
    let fecha = date.getDate()+'/'+ (date.getMonth()+1) +'/'+ date.getFullYear() + '  ' + horas + ':' + minutos;
    

    if(texto.length !== 0){
      try {
        const resp = await api.post('comentarios/comentar', {
          id_prod: params.id,
          nombre_user: username,
          texto: texto,
          fecha: fecha
        })
        console.log(resp)
        swal("✅","Gracias por comentar!", "success");
        obtenerComentarios();
        setTexto('');
      } catch (error) {
        console.log(error)
      }
    }else{
      swal("❌","Ingrese un comentario!", "error");
    }
  }


  useEffect(() => {
    obtenerProducto();
    obtenerComentarios();
  }, []);

  return (
    <>
      <Header />
      <div className="container-product">
        <img src={producto.imagen} alt="" />
        <div className="info-product">
          <span>{producto.nombre}</span>
          <span>Contiene: {producto.detalle}</span>
          <span>Categoria: {producto.categoria}</span>
          <span>Precio: {producto.precio}</span>
          <button onClick={(e) => agregarACarrito(e)}>Agregar</button>
        </div>
      </div>
      <div className="coment-container">
        <h1>Deja tu comentario!</h1>
        <div className="form">
          <img src="https://www.nicepng.com/png/detail/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png" alt="" />
          <form onSubmit={comentar}>
            <input type="text" placeholder="Dejar comentario" value={texto} onChange={(e) => setTexto(e.target.value)}/>
            <button>Enviar</button>
          </form>
        </div>
        {
          comentarios.length == 0 ?
            <>
              <h6> 0 Comentarios</h6>
            </> :
            <>
              <h6>{comentarios.length} Comentarios</h6>
            </>
        }
        <div className="comentarios-section">
          {
            comentarios.toReversed().map((ele, index) => {
              return (
                <div className="coment-card" key={index}>
                  <img src="https://www.nicepng.com/png/detail/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png" alt="" />
                  <div className="card-info">
                    <span>{ele.nombre_user}<span className="fecha">{ele.fecha}</span></span>
                    <span>{ele.texto}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <Footer />
    </>
  )
}
