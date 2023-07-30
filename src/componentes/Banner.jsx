import entrega from "../assets/4741565.jpg"
import "../css/bannerScreen.css"

export const Banner = () => {
    return (
        <>
            <div className="container-banner">
                <div className="section1">
                    <h2>Una manera fácil de hacer un pedido</h2>
                    <h3>¿HAMBRIENTO?</h3>
                    <h5>Solo espera la comida en tu puerta</h5>
                    <button className="banner-btn">ORDENE AHORA </button>
                    <button className="banner-btn">VER TODO</button>
                    
                </div>
                <img src={entrega} alt="" />
            </div>
        </>
    )
}
