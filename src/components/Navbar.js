// import React, { Component } from 'react'
// import { IoCartOutline } from "react-icons/io5";
// import Logo from '../images/dominos.png'
// import {Link} from "react-router-dom";
//  class Navbar extends Component {
//     render() {
     
//         return (
//             <div className="nav" style={{backgroundColor : "black"}} >
//                   <div className="container">
//                         <div className="nav__left">
//                         <Link to="/"><img src={Logo} style={{width:"16%"}}></img> </Link>
//                         </div>
//                         <div className="nav__right">
//                         <Link to="/cart">
//                             <div className="basket">
//                             <IoCartOutline className="cart-icon"  />
                            
//                             </div>
//                         </Link>
//                         </div>
                       
//                   </div>
                
//             </div>
//         )
//     }
// }
// export default Navbar
import React from 'react'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import { IoCartOutline } from "react-icons/io5";
 import Logo from '../images/dominos.png'
const Navbar = () => {
    const {totalQuantities} = useSelector(state => state.CartReducer)
    return (
        <div className="nav" style={{backgroundColor : "black"}} >
             <div className="container">
                    <div className="nav__left">
                    <Link to="/"><img src={Logo} style={{width:"20%"}}></img> </Link>
                    </div>
                    <div className="nav__right">
                        <Link to="/cart">
                            <div className="basket">
                            <IoCartOutline className="cart-icon"  />
                            <span>{totalQuantities}</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        
    )
}

export default Navbar