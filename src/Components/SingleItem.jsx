import React, { useContext, useState } from 'react'
import { removewish } from '../CartContext/action'
import { CartContext } from '../CartContext/CartContextProvider'

let cartItem = JSON.parse(localStorage.getItem('cartItem')) || []

const SingleItem = ({el,setVal,setData}) => {
  const{state,dispatch}=useContext(CartContext)
    let qty = []
    for(let i=1;i<=(el.quantity);i++){
        qty.push(i)
      }
      const changeVal = (e) => {
        setVal(e.target.value)
      }
      
    //  const handleDelete = (id) => {
    //   dispatch(removewish(item.id))
        
    //  }
    console.log(state)
      
  return (
    <div className='singleitem'>
        <img style={{width:'60px'}} src={el.imageURL} alt={el.name} />
        <div>
            <h5>{el.name}</h5>
            <h5>Rs.{el.price}</h5>
        </div>
                  <div>
                    <select  id="quant" onChange={changeVal}>
                     {
                        qty.length>0&&
                        qty.map((el) => {
                            return <option value={el} key={el}>Qty :{el}</option>
                        })
                     }
                    </select>
                  </div>
        <button onClick={() => dispatch(removewish(el.id))}>Delete</button>
    </div>
  )
}

export default SingleItem