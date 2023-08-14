import '../css/bannerdos.css';
import img1 from '../assets/takeaway1.png'
import img2 from '../assets/takeaway2.png'
import img3 from '../assets/takeaway3.png'

export const Bannerdos = () => {
  return (
    <>
        <div className="bannerdos-container">
            <h1 className='bannerdos-title'>Nuestro servicio</h1>
            <div className="bannerdos-card">
                <img src={img1} alt="" />
                <h1>Envio en minutos..</h1>
            </div>
            <div className="bannerdos-card">
                <img src={img2} alt="" />
                <h1>Seguimiento del envio</h1>
            </div>
            <div className="bannerdos-card">
                <img src={img3} alt="" />
                <h1>Facil de recoger</h1>
            </div>
            
        </div>
    </>
  )
}
