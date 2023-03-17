import React from 'react'
import '../ComponentCSS/SingleProduct.css'

const SingleProduct = (el) => {

  console.log(el)
  return (
    <div className='singleProduct'>
      <h5>{el.name}</h5>
      <div className='imgdiv'><img src={el.imageURL} alt={el.name} /></div>
      <div className='pricebutton'>
        <p>Price:{el.price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  )
}

export default SingleProduct