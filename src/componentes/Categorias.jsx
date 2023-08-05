import '../css/categorias.css';
import { ProductCard } from './ProductCard';

<<<<<<< HEAD

import hamburger from '../assets/product_01.jpg';
import hamburger1 from '../assets/product_01.1.jpg';
import hamburger2 from '../assets/product_01.3.jpg';
import hamburger3 from '../assets/product_04.jpg';
import hamburger4 from '../assets/product_08.jpg';
import hamburger5 from '../assets/product_09.jpg';
import pizza from '../assets/product_2.1.jpg';
import pizza1 from '../assets/product_2.2.jpg';
import pizza2 from '../assets/product_2.3.jpg';
import pizza3 from '../assets/product_3.2.jpg';
import pizza4 from '../assets/product_3.3.jpg';
import pizza5 from '../assets/product_4.1.jpg';
import pizza6 from '../assets/product_4.2.jpg';
import pizza7 from '../assets/product_4.3.png';

import { useState } from 'react';
=======
import { useEffect, useState } from 'react';
import api from '../api/api';
>>>>>>> 9477c440792ac283d6cc1daf3903a5f889fa66c5
export const Categorias = () => {

    const [hambur, setHamburger] = useState(false);
    const [picza, setPizza] = useState(false);
<<<<<<< HEAD
=======
    const [papas, setPapas] = useState(false);
>>>>>>> 9477c440792ac283d6cc1daf3903a5f889fa66c5
    const [all, setAll] = useState(true);

    const handleHamburger = () => {
        setHamburger(true);
        setPizza(false);
        setAll(false);
<<<<<<< HEAD
=======
        setPapas(false);
>>>>>>> 9477c440792ac283d6cc1daf3903a5f889fa66c5
    }
    const handleAll = () => {
        setAll(true);
        setHamburger(false);
        setPizza(false);
<<<<<<< HEAD
=======
        setPapas(false);
>>>>>>> 9477c440792ac283d6cc1daf3903a5f889fa66c5
    }
    const handelPizza = () => {
        setPizza(true);
        setHamburger(false);
        setAll(false);
<<<<<<< HEAD
    }
=======
        setPapas(false);
    }
    const handlePapas = () => {
        setPapas(true);
        setPizza(false);
        setHamburger(false);
        setAll(false);
    }

    
    const obtenerProductos = async () => {
        try {
            const products = await api.get('/admin/productos');
            setProductos(products.data.productos)
        } catch (error) {
            console.log(error)
        }
    }
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        obtenerProductos();
    },[]);
>>>>>>> 9477c440792ac283d6cc1daf3903a5f889fa66c5

    return (
        <>
            <div className='categorias-container'>
                <h1>Pedí lo que más te guste!</h1>
                <div className="categorias">
                    <button onClick={handleAll} className={all ? 'btn-active' : ''}>Todo</button>
                    <button onClick={handelPizza} className={picza ? 'btn-active' : ''}>Pizzas</button>
                    <button onClick={handleHamburger} className={hambur ? 'btn-active' : ''}>Hamburguesas</button>
<<<<<<< HEAD
                    <button>Papas</button>
=======
                    <button onClick={handlePapas} className={papas ? 'btn-active' : ''}>Papas</button>
>>>>>>> 9477c440792ac283d6cc1daf3903a5f889fa66c5
                </div>
                <div className='cards-container'>

                    {all ?

                        <>

<<<<<<< HEAD
                            {/* ↓↓↓ HAMBURGESAS ↓↓↓ */}

                            <ProductCard img={hamburger} nombre={'Chicken Burger'} precio={'$1600'}/>
                            <ProductCard img={hamburger1} nombre={'Meat Burger'} precio={'$1500'}/>
                            <ProductCard img={hamburger2} nombre={'Fish Burger'} precio={'$1900'}/>
                            <ProductCard img={hamburger3} nombre={'Fish Burger'} precio={'$1200'}/>
                            <ProductCard img={hamburger4} nombre={'Fish Burger'} precio={'$1300'}/>
                            <ProductCard img={hamburger5} nombre={'Fish Burger'} precio={'$1400'}/>
                            
                            {/* ↓↓↓ PIZZAS ↓↓↓ */}

                            <ProductCard img={pizza} nombre={'Chicken Burger'} precio={'$1600'}/>
                            <ProductCard img={pizza1} nombre={'Meat Burger'} precio={'$1500'}/>
                            <ProductCard img={pizza2} nombre={'Fish Burger'} precio={'$1900'}/>
                            <ProductCard img={pizza3} nombre={'Fish Burger'} precio={'$1200'}/>
                            <ProductCard img={pizza4} nombre={'Fish Burger'} precio={'$1300'}/>
                            <ProductCard img={pizza5} nombre={'Fish Burger'} precio={'$1400'}/>
                            <ProductCard img={pizza6} nombre={'Fish Burger'} precio={'$1400'}/>
                            <ProductCard img={pizza7} nombre={'Fish Burger'} precio={'$1400'}/>
                            
=======
{
                                productos.map((prod) => {                             
                                        return <ProductCard 
                                        key={prod._id} 
                                        id={prod._id} 
                                        img={prod.imagen} 
                                        nombre={prod.nombre} 
                                        precio={prod.precio}
                                        detalle={prod.detalle}
                                        />                                  
                                })
                            }

>>>>>>> 9477c440792ac283d6cc1daf3903a5f889fa66c5
                        </>
                        : <></>}

                    {picza ?

                        <>
<<<<<<< HEAD
                            <ProductCard img={pizza} nombre={'Chicken Burger'} precio={'$1600'}/>
                            <ProductCard img={pizza1} nombre={'Meat Burger'} precio={'$1500'}/>
                            <ProductCard img={pizza2} nombre={'Fish Burger'} precio={'$1900'}/>
                            <ProductCard img={pizza3} nombre={'Fish Burger'} precio={'$1200'}/>
                            <ProductCard img={pizza4} nombre={'Fish Burger'} precio={'$1300'}/>
                            <ProductCard img={pizza5} nombre={'Fish Burger'} precio={'$1400'}/>
                            <ProductCard img={pizza6} nombre={'Fish Burger'} precio={'$1400'}/>
                            <ProductCard img={pizza7} nombre={'Fish Burger'} precio={'$1400'}/>
                        </>
                        : <></>}

                        {hambur ? 
                        <>
                            <ProductCard img={hamburger} nombre={'Chicken Burger'} precio={'$1600'}/>
                            <ProductCard img={hamburger1} nombre={'Meat Burger'} precio={'$1500'}/>
                            <ProductCard img={hamburger2} nombre={'Fish Burger'} precio={'$1900'}/>
                            <ProductCard img={hamburger3} nombre={'Fish Burger'} precio={'$1200'}/>
                            <ProductCard img={hamburger4} nombre={'Fish Burger'} precio={'$1300'}/>
                            <ProductCard img={hamburger5} nombre={'Fish Burger'} precio={'$1400'}/>
=======
                            {
                                productos.map((prod) => {
                                    if (prod.categoria == 'Pizza') {
                                        return <ProductCard 
                                        key={prod._id} 
                                        id={prod._id} 
                                        img={prod.imagen} 
                                        nombre={prod.nombre} 
                                        precio={prod.precio}
                                        detalle={prod.detalle} />
                                    }
                                })
                            }
                        </>
                        : <></>}

                    {hambur ?
                        <>
                            {
                                productos.map((prod) => {
                                    if (prod.categoria == 'Hambur') {
                                        return <ProductCard 
                                        key={prod._id}
                                        id={prod._id}
                                        img={prod.imagen} 
                                        nombre={prod.nombre} 
                                        precio={prod.precio}
                                        detalle={prod.detalle}
                                         />
                                    }
                                })
                            }
                        </> : <></>}
                    {papas ?
                        <>
                            {
                                productos.map((prod) => {
                                    if (prod.categoria == 'Papas') {
                                        return <ProductCard 
                                        key={prod._id} 
                                        id={prod._id} 
                                        img={prod.imagen} 
                                        nombre={prod.nombre} 
                                        precio={prod.precio} />
                                    }
                                })
                            }
>>>>>>> 9477c440792ac283d6cc1daf3903a5f889fa66c5
                        </> : <></>}

                </div>
            </div>
        </>
    )
}
