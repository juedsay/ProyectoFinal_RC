import '../css/categorias.css';

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
                            <div className="card">
                                <img src={hamburger} alt="" />
                                <span>Chicken Burger</span>
                            </div>
                            <div className="card">
                                <img src={hamburger1} alt="" />
                                <span>Meat Burger</span>
                            </div>
                            <div className="card">
                                <img src={hamburger2} alt="" />
                                <span>Fish Burger</span>
                            </div>
                            <div className="card">
                                <img src={hamburger3} alt="" />
                                <span>Dog Burger</span>
                            </div>
                            <div className="card">
                                <img src={hamburger4} alt="" />
                                <span>Dog Burger</span>
                            </div>
                            <div className="card">
                                <img src={hamburger5} alt="" />
                                <span>Dog Burger</span>
                            </div>

                            {/* PIZZAS */}

                            <div className="card">
                                <img src={pizza} alt="" />
                                <span>Chicken Burger</span>
                            </div>
                            <div className="card">
                                <img src={pizza1} alt="" />
                                <span>Meat Burger</span>
                            </div>
                            <div className="card">
                                <img src={pizza2} alt="" />
                                <span>Fish Burger</span>
                            </div>
                            <div className="card">
                                <img src={pizza3} alt="" />
                                <span>Dog Burger</span>
                            </div>
                            <div className="card">
                                <img src={pizza4} alt="" />
                                <span>Dog Burger</span>
                            </div>
                            <div className="card">
                                <img src={pizza5} alt="" />
                                <span>Dog Burger</span>
                            </div>
                            <div className="card">
                                <img src={pizza6} alt="" />
                                <span>Dog Burger</span>
                            </div>
                            <div className="card">
                                <img src={pizza7} alt="" />
                                <span>Dog Burger</span>
                            </div>
                        </>
                        : <></>}

                    {picza ?

                        <>
                            <div className="card">
                                <img src={pizza} alt="" />
                                <span>Chicken Burger</span>
                            </div>
                            <div className="card">
                                <img src={pizza1} alt="" />
                                <span>Meat Burger</span>
                            </div>
                            <div className="card">
                                <img src={pizza2} alt="" />
                                <span>Fish Burger</span>
                            </div>
                            <div className="card">
                                <img src={pizza3} alt="" />
                                <span>Dog Burger</span>
                            </div>
                            <div className="card">
                                <img src={pizza4} alt="" />
                                <span>Dog Burger</span>
                            </div>
                            <div className="card">
                                <img src={pizza5} alt="" />
                                <span>Dog Burger</span>
                            </div>
                            <div className="card">
                                <img src={pizza6} alt="" />
                                <span>Dog Burger</span>
                            </div>
                            <div className="card">
                                <img src={pizza7} alt="" />
                                <span>Dog Burger</span>
                            </div>
                        </>
                        : <></>}

                        {hambur ? 
                        <>
                            <div className="card">
                                <img src={hamburger} alt="" />
                                <span>Chicken Burger</span>
                            </div>
                            <div className="card">
                                <img src={hamburger1} alt="" />
                                <span>Meat Burger</span>
                            </div>
                            <div className="card">
                                <img src={hamburger2} alt="" />
                                <span>Fish Burger</span>
                            </div>
                            <div className="card">
                                <img src={hamburger3} alt="" />
                                <span>Dog Burger</span>
                            </div>
                            <div className="card">
                                <img src={hamburger4} alt="" />
                                <span>Dog Burger</span>
                            </div>
                            <div className="card">
                                <img src={hamburger5} alt="" />
                                <span>Dog Burger</span>
                            </div>
                        </> : <></>}

                </div>
            </div>
        </>
    )
}
