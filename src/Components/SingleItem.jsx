import React from 'react'

const SingleItem = ({el}) => {
    let qty = []
    for(let i=1;i<=(el.quantity);i++){
        qty.push(i)
      }
  return (
    <div className='singleitem'>
        <img style={{width:'60px'}} src={el.imageURL} alt={el.name} />
        <div>
            <h5>{el.name}</h5>
            <h5>Rs.{el.price}</h5>
        </div>
                  <div>
                    <select  id="quant">
                     {
                        qty.length>0&&
                        qty.map((el) => {
                            return <option value={el}>Qty :{el}</option>
                        })
                     }
                    </select>
                  </div>
        <button>Delete</button>
    </div>
  )
}

export default SingleItem