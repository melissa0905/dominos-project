import React, { Component } from 'react'
import {useSelector} from "react-redux";

import {Link} from "react-router-dom"

const Home = () => {
    
        const {products} = useSelector(state => state.ProductsReducer);
        return (
            <div>
               <center><h1>Tüm Pizzalar</h1> </center>
            <div className="container">
                <div className="row">
                    {products.map(product => (
                        <div className="col-3" key={product.id}>
                            <div className="product">
                                <div className="cart">
                                    <div className="product__img">
                                        <Link to={`/details/${product.id}`}><img src={`${product.image}`} alt="image name"/></Link>
                                    </div>
                                    <div className="product__name">
                                        {product.name}
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="product__price">
                                                <span className="discount">{product.desc}</span>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="product__discount__price">
                                            {product.price} TL
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        )
    
}
export default Home