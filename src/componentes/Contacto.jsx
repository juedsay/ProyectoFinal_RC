import "../css/contactoScreen.css";
import Footer from "./Footer";

const Contacto = () => {
  return (
    <>
    <div className="contactoss">

  
      <div className="separador-texto">
        <h2>Nuestro equipo está formado por</h2>
      </div>

      <div className="hola">
        {/* Tarjeta 1 */}
        <div className="cardN">
          <div className="face front">
            <img src="https://avatars.githubusercontent.com/u/104668496?v=4" alt="" />
            <h3>Francisco Leirman</h3>
          </div>
          <div className="face back">
            <h3>Francisco Leirman</h3>
            <p>
              Edad: 25 <br />
              Hobbies: Me gusta jugar videojuegos, ver anime y entrenar.
            </p>
            <div className="link">
              <a href="https://github.com/FranciscoLeirman">Github</a>
            </div>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="cardN">
          <div className="face front">
            <img src="https://avatars.githubusercontent.com/u/48840855?s=400&u=ed4814918eb39ca14bf7d1f7a1c222fa884ebe76&v=4" alt="" />
            <h3>Juan Cruz Infante</h3>
          </div>
          <div className="face back">
            <h3>Juan Cruz</h3>
            <p>
              Edad: 24 <br />
              Hobbies: En mis ratos libres veo peliculas de terror, me encanta
              escuchar musica y hacer yoga.
            </p>
            <div className="link">
              <a href="https://github.com/juancinfante">Github</a>
            </div>
          </div>
        </div>

        

        {/* Tarjeta 4 */}
        <div className="cardN">
          <div className="face front">
            <img src="https://avatars.githubusercontent.com/u/32204826?v=4" alt="" />
            <h3>Julian Simón</h3>
          </div>
          <div className="face back">
            <h3>Julian Simón</h3>
            <p>
              Edad: 25 <br />
              Hobbies: Me gusta aprender sobre ciencia y tecnología, ver series
              y películas, jugar videojuegos y la fotografía.
            </p>
            <div className="link">
              <a href="https://github.com/juedsay">Github</a>
            </div>
          </div>
        </div>
      </div>

      <div className="inferior">
        <p className="proyecto"></p>
        <h2 className=""></h2>
        <br />
        
      </div>
      <Footer/>
      </div>
    </>
  );
};

export default Contacto;
