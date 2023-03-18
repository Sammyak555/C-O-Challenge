import React, { useEffect } from 'react'
import SingleItem from '../Components/SingleItem'
import "../PagesCSS/CartPage.css"

let cartItem = JSON.parse(localStorage.getItem('cartItem')) || []

const CartPage = () => {
  return (
    <div>
      <div className='cartpage'>
        <h3>Shopping Cart</h3>
        <br />
        <div>
          {
            cartItem.map((el) => {
              return(
                <div key={el.id}>
                  <SingleItem el={el}/>
                </div>
              )
            })
          }
        </div>
        <div ></div>
      </div>
    </div>
  )
}

export default CartPage