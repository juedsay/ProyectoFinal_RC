import '../css/comidas.css'

const Comidas = () => {
    return (
        <section>
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-6 col-md-6 col-lg-6">
                    <div class="search__widget d-flex align-items-center justify-content-between ">
                        <input type="text" placeholder="I'm looking for...."/>
                         <span>
                            <i class="ri-search-line">
                                
                            </i>
                         </span>
                    </div>
                </div>
                <div class="mb-5 col-12 col-sm-6 col-md-6 col-lg-6">
                    <div class="sorting__widget text-end">
                        <select class="w-50">
                            <option>Default</option>
                            <option value="ascending">Alfabeticamente, A-Z</option>
                            <option value="descending">Alfabeticamente, Z-A</option>
                            <option value="low-price">Menor Precio</option>
                            <option value="high-price">Mayor Precio</option>
                        </select>
                    </div>
                </div>
                <div class="mb-4 col-6 col-sm-6 col-md-4 col-lg-3">
                    <div class="product__item">
                        <div class="product__img">
                            <img src="/src/assets/product_01.jpg" alt="" class="w-50"/>
                        </div>
                        <div class="product__content">
                            <h5>
                                <a href="/foods/01">Hamburguesa de Pollo</a>
                            </h5>
                            <div class=" d-flex align-items-center justify-content-between ">
                                <span class="product__price">"$100" </span>
                                <button class="addTOCart__btn">Agregar al Carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-4 col-6 col-sm-6 col-md-4 col-lg-3">
                    <div class="product__item">
                        <div class="product__img">
                            <img src="/src/assets/product_2.1.jpg" alt="" class="w-50"/>
                        </div>
                        <div class="product__content">
                            <h5>
                                <a href="/foods/01">Pizza Vegetariana</a>
                            </h5>
                            <div class=" d-flex align-items-center justify-content-between ">
                                <span class="product__price">"$114" </span>
                                <button class="addTOCart__btn">Agregar al Carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-4 col-6 col-sm-6 col-md-4 col-lg-3">
                    <div class="product__item">
                        <div class="product__img">
                            <img src="/src/assets/product_3.1.jpg" alt="" class="w-50"/>
                        </div>
                        <div class="product__content">
                            <h5>
                                <a href="/foods/01">Pizza Margarita con doble queso</a>
                            </h5>
                            <div class=" d-flex align-items-center justify-content-between ">
                                <span class="product__price">"$154" </span>
                                <button class="addTOCart__btn">Agregar al Carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-4 col-6 col-sm-6 col-md-4 col-lg-3">
                    <div class="product__item">
                        <div class="product__img">
                            <img src="/src/assets/product_4.1.jpg" alt="" class="w-50"/>
                        </div>
                        <div class="product__content">
                            <h5>
                                <a href="/foods/01">Pizza a la onda Mexicana</a>
                            </h5>
                            <div class=" d-flex align-items-center justify-content-between ">
                                <span class="product__price">"$185" </span>
                                <button class="addTOCart__btn">Agregar al Carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-4 col-6 col-sm-6 col-md-4 col-lg-3">
                    <div class="product__item">
                        <div class="product__img">
                            <img src="/src/assets/product_04.jpg" alt="" class="w-50"/>
                        </div>
                        <div class="product__content">
                            <h5>
                                <a href="/foods/01">Hamburguesa con queso cheddar</a>
                            </h5>
                            <div class=" d-flex align-items-center justify-content-between ">
                                <span class="product__price">"$200" </span>
                                <button class="addTOCart__btn">Agregar al Carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-4 col-6 col-sm-6 col-md-4 col-lg-3">
                    <div class="product__item">
                        <div class="product__img">
                            <img src="/src/assets/product_09.jpg" alt="" class="w-50"/>
                        </div>
                        <div class="product__content">
                            <h5>
                                <a href="/foods/01">Hamburguesa de Royal con queso cheddar</a>
                            </h5>
                            <div class=" d-flex align-items-center justify-content-between ">
                                <span class="product__price">"$280" </span>
                                <button class="addTOCart__btn">Agregar al Carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-4 col-6 col-sm-6 col-md-4 col-lg-3">
                    <div class="product__item">
                        <div class="product__img">
                            <img src="/src/assets/product_2.2.jpg" alt="" class="w-50"/>
                        </div>
                        <div class="product__content">
                            <h5>
                                <a href="/foods/01">Pizza de mariscos</a>
                            </h5>
                            <div class=" d-flex align-items-center justify-content-between ">
                                <span class="product__price">"$240" </span>
                                <button class="addTOCart__btn">Agregar al Carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-4 col-6 col-sm-6 col-md-4 col-lg-3">
                    <div class="product__item">
                        <div class="product__img">
                            <img src="/src/assets/product_3.2.jpg" alt="" class="w-50"/>
                        </div>
                        <div class="product__content">
                            <h5>
                                <a href="/foods/01">Pizza estilo NY</a>
                            </h5>
                            <div class=" d-flex align-items-center justify-content-between ">
                                <span class="product__price">"$220" </span>
                                <button class="addTOCart__btn">Agregar al Carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-4 col-6 col-sm-6 col-md-4 col-lg-3">
                    <div class="product__item">
                        <div class="product__img">
                            <img src="/src/assets/product_4.2.jpg" alt="" class="w-50"/>
                        </div>
                        <div class="product__content">
                            <h5>
                                <a href="/foods/01">Pizza con hongos</a>
                            </h5>
                            <div class=" d-flex align-items-center justify-content-between ">
                                <span class="product__price">"$285" </span>
                                <button class="addTOCart__btn">Agregar al Carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-4 col-6 col-sm-6 col-md-4 col-lg-3">
                    <div class="product__item">
                        <div class="product__img">
                            <img src="/src/assets/product_08.jpg" alt="" class="w-50"/>
                        </div>
                        <div class="product__content">
                            <h5>
                                <a href="/foods/01">Hamburguesa Clasica</a>
                            </h5>
                            <div class=" d-flex align-items-center justify-content-between ">
                                <span class="product__price">"$120" </span>
                                <button class="addTOCart__btn">Agregar al Carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-4 col-6 col-sm-6 col-md-4 col-lg-3">
                    <div class="product__item">
                        <div class="product__img">
                            <img src="/src/assets/bread(1).png" alt="" class="w-50"/>
                        </div>
                        <div class="product__content">
                            <h5>
                                <a href="/foods/01">Pan Casero</a>
                            </h5>
                            <div class=" d-flex align-items-center justify-content-between ">
                                <span class="product__price">"$15" </span>
                                <button class="addTOCart__btn">Agregar al Carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-4 col-6 col-sm-6 col-md-4 col-lg-3">
                    <div class="product__item">
                        <div class="product__img">
                            <img src="/src/assets/bread(2).png" alt="" class="w-50"/>
                        </div>
                        <div class="product__content">
                            <h5>
                                <a href="/foods/01">Pan de Campo</a>
                            </h5>
                            <div class=" d-flex align-items-center justify-content-between ">
                                <span class="product__price">"$30" </span>
                                <button class="addTOCart__btn">Agregar al Carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-4 col-6 col-sm-6 col-md-4 col-lg-3">
                    <div class="product__item">
                        <div class="product__img">
                            <img src="/src/assets/bread(3).png" alt="" class="w-50"/>
                        </div>
                        <div class="product__content">
                            <h5>
                                <a href="/foods/01">Pan Flauta</a>
                            </h5>
                            <div class=" d-flex align-items-center justify-content-between ">
                                <span class="product__price">"$24" </span>
                                <button class="addTOCart__btn">Agregar al Carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
                

                <div>
                    <ul class=" paginationBttns ">
                        <li class="previous disabled">
                        <a class=" " tabindex="-1" role="button" aria-disabled="true" aria-label="Previous page" rel="prev">Prev</a>
                        </li>
                        <li class="selected">
                            <a rel="canonical" role="button" tabindex="-1" aria-label="Page 1 is your current page" aria-current="page">1</a>
                        </li>
                        <li>
                            <a rel="next" role="button" tabindex="0" aria-label="Page 2">2</a>
                        </li>
                        <li class="next">
                            <a class="" tabindex="0" role="button" aria-disabled="false" aria-label="Next page" rel="next">Next</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>
  );
}

export default Comidas;