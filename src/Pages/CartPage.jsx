import React, { useContext, useEffect, useState } from 'react'
import { removewish } from '../CartContext/action'
import { CartContext } from '../CartContext/CartContextProvider'
import SingleItem from '../Components/SingleItem'
import "../PagesCSS/CartPage.css"

const CartPage = () => {
  const [data, setData] = useState(false)
  const { state, dispatch } = useContext(CartContext)
  const [total, setTotal] = useState(0)
  
  
  useEffect(() => {
    state.forEach((el) => {
      setTotal((prev)=>prev+el.price)
    });
  }, [])

  // const incval =(el) => {
  //   setval(val+1)
  // }
  // const deccval =(el) => {
  //   setval(val-1)
  // }
  // const deleteItem = (el) => {
  //   dispatch(removewish(el.id))
  //   setTotal((prev)=>prev-el.price)
  // }

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
                  <SingleItem  el={el} total={total} setTotal={setTotal}/>
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