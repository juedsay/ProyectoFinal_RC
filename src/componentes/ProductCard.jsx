import { NavLink } from 'react-router-dom';
import '../css/productCard.css';

// eslint-disable-next-line react/prop-types
export const ProductCard = ({ id, img, nombre, precio }) => {
    return (
        <>
            <div className="card">
                <img src={img} alt="" />
                <span><NavLink to={`/product/${id}`}>{nombre}</NavLink></span>
                <div className='price-btn'>
                    <span>{precio}</span>
                    <button>Añadir al carrito</button>
                </div>
            </div>
        </>
    )
}
