import "../css/contactoScreen.css";

const Contacto = () => {
  return (
    <>
      <div className="separador-texto">
        <h2>Nuestro equipo está formado por</h2>
      </div>

      <div className="hola">
        {/* Tarjeta 1 */}
        <div className="cardN">
          <div className="face front">
            <img src="../img/nosotros/Francisco.jpg" alt="" />
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
            <img src="../img/nosotros/melany.jpg" alt="" />
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
            <img src="" alt="" />
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
        <img
          src="/src/assets/logocubiertos.png"
          className="iconproyect"
          alt=""
        />
      </div>

      <footer className="text-center text-lg-start bg-dark text-light">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>
              Mantente conectado con nosotros a través de nuestras redes
              sociales:
            </span>
          </div>
          <div className="btn-redes">
            <a href="./error404.html" className="me-4 text-reset btn-fb">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="./error404.html" className="me-4 text-reset btn-tw">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="./error404.html" className="me-4 text-reset btn-yt">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="./error404.html" className="me-4 text-reset btn-ig">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Contacto;
