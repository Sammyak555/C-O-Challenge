import React,{useContext} from 'react'
import '../ComponentCSS/SingleProduct.css'
import { CartContext } from '../CartContext/CartContextProvider'
import { addtowish } from '../CartContext/action'

let cartItem = JSON.parse(localStorage.getItem('cartItem')) || []
const SingleProduct = (el) => {
  const{state,dispatch}=useContext(CartContext)
  // const handleAdd = (el) => {
  //   cartItem.push(el)
  //   localStorage.setItem('cartItem',JSON.stringify(cartItem))
  // }

  return (
    <div className='singleProduct'>
      <h5>{el.name}</h5>
      <div className='imgdiv'><img src={el.imageURL} alt={el.name} /></div>
      <div className='pricebutton'>
        <p>Price:{el.price}</p>
        <button onClick={()=>dispatch(addtowish(el))}>Add to Cart</button>
      </div>
    </div>
  )
}

export default SingleProduct