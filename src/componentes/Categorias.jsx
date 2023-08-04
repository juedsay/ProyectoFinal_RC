import '../css/categorias.css';
import { ProductCard } from './ProductCard';

import { useEffect, useState } from 'react';
import api from '../api/api';
export const Categorias = () => {

    const [hambur, setHamburger] = useState(false);
    const [picza, setPizza] = useState(false);
    const [papas, setPapas] = useState(false);
    const [all, setAll] = useState(true);

    const handleHamburger = () => {
        setHamburger(true);
        setPizza(false);
        setAll(false);
        setPapas(false);
    }
    const handleAll = () => {
        setAll(true);
        setHamburger(false);
        setPizza(false);
        setPapas(false);
    }
    const handelPizza = () => {
        setPizza(true);
        setHamburger(false);
        setAll(false);
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

    return (
        <>
            <div className='categorias-container'>
                <h1>Pedí lo que más te guste!</h1>
                <div className="categorias">
                    <button onClick={handleAll} className={all ? 'btn-active' : ''}>Todo</button>
                    <button onClick={handelPizza} className={picza ? 'btn-active' : ''}>Pizzas</button>
                    <button onClick={handleHamburger} className={hambur ? 'btn-active' : ''}>Hamburguesas</button>
                    <button onClick={handlePapas} className={papas ? 'btn-active' : ''}>Papas</button>
                </div>
                <div className='cards-container'>

                    {all ?

                        <>

{
                                productos.map((prod) => {                             
                                        return <ProductCard 
                                        key={prod._id} 
                                        id={prod._id} 
                                        img={prod.imagen} 
                                        nombre={prod.nombre} 
                                        precio={prod.precio} />                                  
                                })
                            }

                        </>
                        : <></>}

                    {picza ?

                        <>
                            {
                                productos.map((prod) => {
                                    if (prod.categoria == 'Pizza') {
                                        return <ProductCard 
                                        key={prod._id} 
                                        id={prod._id} 
                                        img={prod.imagen} 
                                        nombre={prod.nombre} 
                                        precio={prod.precio} />
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
                        </> : <></>}

                </div>
            </div>
        </>
    )
}
