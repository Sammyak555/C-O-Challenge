import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "../ComponentCSS/Navbar.css"
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CartContext } from '../CartContext/CartContextProvider';

const Navbar = () => {
    const { state, dispatch } = useContext(CartContext)
    return (
        <div className='navbar'>
            <div>TeeRex Store</div>
            <div className='navlinks'>
                <div><Link to={'/'}>Products</Link></div>
                <div className='carticon'>
                    <Link to={'/cart'}><AiOutlineShoppingCart  size="25" color='green'/></Link>
                    <p>{state.length}</p>
                </div>

            </div>
        </div>
    )
}

export default Navbar