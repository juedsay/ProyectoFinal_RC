import '../css/categorias.css';
import hamburger from '../assets/product_01.1.jpg';
import { useState } from 'react';
export const Categorias = () => {

    const [chicken, setChicken] = useState(false);
    const [meat, setMeat] = useState(false);
    const [fish, setFish] = useState(false);
    const [dog, setDog] = useState(false);
    const [all, setAll] = useState(true);

    const handleChicken = () => {
        setChicken(true)
        setAll(false)
        setFish(false)
        setDog(false)
        setMeat(false)
    }
    const handleAll = () => {
        setChicken(false)
        setAll(true)
        setFish(false)
        setDog(false)
        setMeat(false)
    }

    return (
        <>
            <div className="categorias">
                <button onClick={handleAll}>Todo</button>
                <button onClick={handleChicken}>Pizzas</button>
                <button>Hamburguesas</button>
                <button>Papas</button>
            </div>
            <div className='cards-container'>

                {all ?

                    <><div className="card">
                        <img src={hamburger} alt="" />
                        <span>Chicken Burger</span>
                    </div>
                        <div className="card">
                            <img src={hamburger} alt="" />
                            <span>Meat Burger</span>
                        </div>
                        <div className="card">
                            <img src={hamburger} alt="" />
                            <span>Fish Burger</span>
                        </div>
                        <div className="card">
                            <img src={hamburger} alt="" />
                            <span>Dog Burger</span>
                        </div></>
                    : <></>}

                {chicken ?

                    <>
                    <div className="card">
                        <img src={hamburger} alt="" />
                        <span>Chicken Burger</span>
                    </div>
                    </>
                    : <></>}

            </div>
        </>
    )
}
