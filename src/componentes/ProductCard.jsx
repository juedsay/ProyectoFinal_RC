import { NavLink } from 'react-router-dom';
import '../css/productCard.css';

export const ProductCard = ({ id, img, nombre, precio }) => {
    return (
        <>
            <div className="card">
                <img src={img} alt="" />
                <span>{nombre}</span>
                <div className='price-btn'>
                    <span>{precio}</span>
                    <button><NavLink to={`/product/${id}`}>Añadir al carrito</NavLink></button>
                </div>
            </div>
        </>
    )
}
