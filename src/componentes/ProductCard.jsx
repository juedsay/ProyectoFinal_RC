import { NavLink } from 'react-router-dom';
import '../css/productCard.css';

 // eslint-disable-next-line react/prop-types
export const ProductCard = ({ id, img, nombre, precio }) => {
    const producto = {
        id_prod: id,
        nombre: nombre,
        imagen: img,
        precio: precio,
        cantidad: 1
    }
    const agregarACarrito = (e) => {
        e.preventDefault();
        let carritoLocalStorage = JSON.parse(localStorage.getItem('carrito'));
        if(carritoLocalStorage == null){
            localStorage.setItem('carrito', JSON.stringify(producto));
        }else{
            let productoExite = carritoLocalStorage.filter((prod) => prod.id_prod == producto.id_prod);
            console.log(productoExite)
            if(productoExite.length !== 0){
                carritoLocalStorage.forEach(prod => {
                    if(prod.id == producto.id){
                        prod.cantidad += 1;
                    }
                });
                localStorage.setItem('carrito',JSON.stringify(carritoLocalStorage));
            }else{
                carritoLocalStorage.push(producto);
                localStorage.setItem('carrito',JSON.stringify(carritoLocalStorage));
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
