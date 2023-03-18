import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartContext/CartContextProvider'
import SingleItem from '../Components/SingleItem'
import "../PagesCSS/CartPage.css"

let cartItem = JSON.parse(localStorage.getItem('cartItem')) || []

const CartPage = () => {
  const [data,setData] = useState(false)
  const{state,dispatch}=useContext(CartContext)
  const [val,setVal] = useState(1)
  let total=0
useEffect(()=>{
  setData(!data)
},[setData])
  // cartItem.map((el) =>{
  //   total+=(el.price)
  // })
  // console.log(total)
  // console.log(val)
  console.log(state)
  return (
    <div>
      <div className='cartpage'>
        <h3>Shopping Cart</h3>
        <br />
        <div>
          {
            state.length>0&&
            state.map((el) => {
              return(
                <div key={el.id}>
                  <SingleItem el={el} setVal={setVal} total={total} setData={setData}/>
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