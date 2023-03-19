import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartContext/CartContextProvider'
import SingleItem from '../Components/SingleItem'
import "../PagesCSS/CartPage.css"

const CartPage = () => {
  const { state } = useContext(CartContext)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    state.forEach((el) => {
      setTotal((prev) => prev + el.price)
    });
  }, [])

  return (
    <div>
      <div className='cartpage'>
        <h3>Shopping Cart</h3>
        <br />
        <div>
          {
            state.length > 0 &&
            state.map((el) => {
              return (
                <div key={el.id}>
                  <SingleItem el={el} total={total} setTotal={setTotal} />
                </div>
              )
            })
          }
        </div>
        <div className='borderline'></div>
        <div className='totalamount'>
          <h5>Total Amount :{total}</h5>
        </div>
      </div>
    </div>
  )
}

export default CartPage