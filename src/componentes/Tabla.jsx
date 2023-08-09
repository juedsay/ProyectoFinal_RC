import '../css/tabla.css'

const Tabla = () => {
    return (
      <section class="p-6">
      <div class="container">
      <div class="row">
      <div class="col-lg-12">
        <table  class="table table-bordered">
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img src="" alt="Imagen 1" /></td>
          <td>Producto 1</td>
          <td>$10.00</td>
          <td>2</td>
          <td><button>Borrar</button></td>
        </tr>
        <tr>
          <td><img src="" alt="Imagen 2" /></td>
          <td>Producto 2</td>
          <td>$15.00</td>
          <td>3</td>
          <td><button>Borrar</button></td>
        </tr>
        <tr>
          <td><img src="" alt="Imagen 3" /></td>
          <td>Producto 3</td>
          <td>$20.00</td>
          <td>1</td>
          <td><button>Borrar</button></td>
        </tr>
      </tbody>
    </table>
     <div className="mt-4">
                <h6>
                  Subtotal: $
                  <span className="cart__subtotal"></span>
                </h6>
                <p>Revise bien su pedido para realizar la compra</p>
                <div className="cart__page-btn">
                  <button className="addTOCart__btn me-4">
                    <a href="">Realizar Pedido</a>
                  </button>
                  <button className="addTOCart__btn">
                    <a href="">Cancelar Pedido</a>
                  </button>
                </div>
              </div>
  </div>
  </div>
  </div>
  </section>
  );
}

export default Tabla;