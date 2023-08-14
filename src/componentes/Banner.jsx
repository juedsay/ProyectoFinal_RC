import entrega from "../assets/4741565.jpg"
import "../css/BannerScreen.css"

export const Banner = () => {
    return (
        <>
            <div className="container-banner">
                <div className="section1">
                    <h2>Una manera fácil de hacer un pedido</h2>
                    <h3>¿HAMBRIENTO?</h3>
                    <h5>Solo espera la comida en tu puerta</h5>
                    <button className="banner-btn"><a href="#categorias">ORDENE</a></button>
                    <button className="banner-btn"><a href="#categorias">VER TODO</a></button>
                </div>
                <img src={entrega} alt="" />
            </div>
        </>
    )
}
