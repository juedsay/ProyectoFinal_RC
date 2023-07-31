import '../css/categorias.css';
import { ProductCard } from './ProductCard';


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
export const Categorias = () => {

    const [hambur, setHamburger] = useState(false);
    const [picza, setPizza] = useState(false);
    const [all, setAll] = useState(true);

    const handleHamburger = () => {
        setHamburger(true);
        setPizza(false);
        setAll(false);
    }
    const handleAll = () => {
        setAll(true);
        setHamburger(false);
        setPizza(false);
    }
    const handelPizza = () => {
        setPizza(true);
        setHamburger(false);
        setAll(false);
    }

    return (
        <>
            <div className='categorias-container'>
                <h1>Pedí lo que más te guste!</h1>
                <div className="categorias">
                    <button onClick={handleAll} className={all ? 'btn-active' : ''}>Todo</button>
                    <button onClick={handelPizza} className={picza ? 'btn-active' : ''}>Pizzas</button>
                    <button onClick={handleHamburger} className={hambur ? 'btn-active' : ''}>Hamburguesas</button>
                    <button>Papas</button>
                </div>
                <div className='cards-container'>

                    {all ?

                        <>

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
                            
                        </>
                        : <></>}

                    {picza ?

                        <>
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
                        </> : <></>}

                </div>
            </div>
        </>
    )
}
