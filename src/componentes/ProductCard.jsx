import '../css/productCard.css';

export const ProductCard = ({ img, nombre, precio }) => {
    return (
        <>
            <div className="card">
                <img src={img} alt="" />
                <span>{nombre}</span>
                <div className='price-btn'>
                    <span>{precio}</span>
                    <button>Añadir al carrito</button>
                </div>
            </div>
        </>
    )
}
