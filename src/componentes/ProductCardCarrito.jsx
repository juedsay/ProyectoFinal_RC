import '../css/carrito.css';

export const ProductCardCarrito = ({img, nombre, cantidad, precio}) => {
  return (
    <>
        <div className="product-carrito-container">
            <img src={img} alt="" />
            <div className="info">
                <span>
                {nombre}
  
                </span>
                <span>
                    <span>-</span><span>{cantidad}</span><span>+</span>
                </span>
                <span>${precio}</span>
            </div>
        </div>
    </>
  )
}
