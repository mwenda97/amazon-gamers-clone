import React from 'react'
import Product from '../product/Product'
import './home.css'

export default function Home() {
    return (
        <div>
            <div className="home">
                <div className="home__container">
                    <img src="/assets/home/cod.jpg" alt="" className="home__Img" />
                    <div className="home__row">
                        <Product 
                        id={1}
                        title='wolfesntiein' price={29.99}
                        image={"/assets/products/games/3.jpg"} 
                        rating={5}/>

                        <Product 
                        id={2}
                        title='Assassins Creed' price={30.99}
                        image={"/assets/products/games/2.jpg"} 
                        rating={4}/>
                        
                        
                    </div>
                    <div className="home__row">
                    <Product
                        id={3}
                        title='GredFall' price={15.99}
                        image={"/assets/products/games/4.jpg"} 
                        rating={3}/>
                    <Product 
                        id={4}
                        title='Jedi' price={10.99}
                        image={"/assets/products/games/5.jpg"} 
                        rating={4}/>
                    <Product 
                        id={5}   
                        title='Shadow Mordor' price={25.99}
                        image={"/assets/products/games/6.jpg"} 
                        rating={4}/>
                    </div>
                    <div className="home__row">
                    <Product 
                        id={5}
                        title='Dead Island' price={10.99}
                        image={"/assets/products/games/7.jpg"} 
                        rating={3}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
