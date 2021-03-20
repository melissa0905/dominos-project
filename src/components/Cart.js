import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {BsDash, BsPlus} from "react-icons/bs";
//import { BsReverseBackspaceReverse } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
const Cart = () => {
    const {products,totalQuantities,totalPrice} = useSelector(state => state.CartReducer);
    const dispatch = useDispatch();
    return (
        <div className="cart">
            <div className="container">
                {products.length > 0 ? <>
                <div className="row">
                    <div className="col-9">
                    <div className="cart__heading">
                        <div className="row">
                            <div className="col-2">Resim</div>
                            <div className="col-2">İsim</div>
                            <div className="col-2">Fiyat</div>
                            <div className="col-2">Adet</div>
                            <div className="col-2">Toplam fiyatı</div>
                            <div className="col-2">Sil</div>
                        </div>
                    </div>
                    {products.map(product => (
                        <div className="row verticalAlign" key={product.id}>
                         <div className="col-2">
                             <div className="cart__image">
                                 <img src={`${product.image}`} alt=""/>
                            </div>   
                         </div>
                         <div className="col-2">
                             <div className="cart__name">
                                 {product.name}
                             </div>
                         </div>
                         <div className="col-2">
                             <div className="cart__price">
                                {product.price} TL
                             </div>
                         </div>
                         <div className="col-2">
                         <div className="details__info cart__incDec">
                        <div className="quan">
                            {product.quantity}
                            
                        </div>
                </div>
                         </div>
                         <div className="col-2">
                             <div className="total">
                                {product.price * product.quantity}TL
                             </div>
                         </div>
                         <div className="col-2">
                             <div className="cart__remove" onClick={() => dispatch({type: 'REMOVE', payload: product.id})}>
                             <AiOutlineDelete/>
                             </div>
                         </div>
                        </div>
                    ))}
                    </div>
                    <div className="col-3 summary-col">
                        <div className="summary">
                            <div className="summary__heading">
                                Özet
                            </div>
                            <div className="summary__details">
                                <div className="row mb-10">
                                    <div className="col-6">
                                        Toplam ürün:
                                    </div>
                                 <div className="col-6">{totalQuantities}</div>
                                </div>
                                <div className="row mb-10">
                                    <div className="col-6">
                                        Toplam fiyat
                                    </div>
                                    <div className="col-6">
                                        {totalPrice}  TL
                                    </div>
                                </div>
                                <button type="button" className="checkout">Satın al</button>
                            </div>
                        </div>
                    </div>
                </div>
                </> : <b>'Sepetiniz boş..'</b>}
            </div>
        </div>
    )
}

export default Cart