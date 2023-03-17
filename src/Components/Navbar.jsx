import React from 'react'
import { Link } from 'react-router-dom'
import "../ComponentCSS/Navbar.css"
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div>TeeRex Store</div>
            <div className='navlinks'>
                <div><Link to={'/'}>Products</Link></div>
                <div><Link to={'/cart'}><AiOutlineShoppingCart/></Link></div>
            </div>
        </div>
    )
}

export default Navbar