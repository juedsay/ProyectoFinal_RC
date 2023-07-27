import entrega from "../assets/4741565.jpg"
import "../css/BannerScreen.css"

export const BannerScreen = () => {
    return (
        <>
            <div className="container-w">
                <div className="section1">
                    <h2>Una manera fácil de hacer un pedido</h2>
                    <h3>¿HAMBRIENTO?</h3>
                    <h5>Solo espera la comida en tu puerta</h5>
                    <button>ORDENE AHORA </button>
                    <button>VER TODO</button>
                    
                </div>
                <img src={entrega} alt="" />
            </div>
        </>
    )
}
