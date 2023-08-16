import { NavLink } from 'react-router-dom';
import '../css/productCard.css';
import swal from 'sweetalert';

 // eslint-disable-next-line react/prop-types
export const ProductCard = ({ id, img, nombre, precio }) => {
    const producto = {
        id_prod: id,
        nombre: nombre,
        imagen: img,
        precio: precio,
        cantidad: 1
    }
    const handleCostoTotal = () => {
        let total = 0;
        let carrito = JSON.parse(localStorage.getItem('carrito'));
        carrito.map((prod) => {
          total += (prod.cantidad * prod.precio);
        })
        localStorage.setItem('total',total);
      }
    const agregarACarrito = (e) => {
        e.preventDefault();
        let carritoLocalStorage = JSON.parse(localStorage.getItem('carrito'));
        if(carritoLocalStorage == null){
            localStorage.setItem('carrito', JSON.stringify(producto));
            swal("✅","Producto añadido.");
            handleCostoTotal();
        }else{
            let productoExite = carritoLocalStorage.filter((prod) => prod.id_prod == producto.id_prod);
            if(productoExite.length !== 0){
                carritoLocalStorage.forEach(prod => {
                    if(prod.id == producto.id){
                        prod.cantidad += 1;
                    }
                });
                localStorage.setItem('carrito',JSON.stringify(carritoLocalStorage));
                swal("✅","Añadido a  carrito");
                handleCostoTotal();
            }else{
                carritoLocalStorage.push(producto);
                localStorage.setItem('carrito',JSON.stringify(carritoLocalStorage));
                swal("✅","Añadido a carrito");
                handleCostoTotal();
            }
        }
        
    }
    return (
        <>
            <div className="card">
                <img src={img} alt="" />
                <span><NavLink to={`/product/${id}`}>{nombre}</NavLink></span>
                <div className='price-btn'>
                    <span>{precio}</span>
                    <button onClick={(e) => agregarACarrito(e)}>Añadir</button>
                </div>
            </div>
        </>
    )
}
