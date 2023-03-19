import React, { useContext, useEffect, useState } from 'react'
import { removewish } from '../CartContext/action'
import { CartContext } from '../CartContext/CartContextProvider'


const SingleItem = ({ el, setTotal, total }) => {
    const { state, dispatch } = useContext(CartContext)
    const [val, setval] = useState(1)

    const incval = () => {
        setval(val + 1)
    }
    const deccval = () => {
        setval(val - 1)
    }
    const deleteItem = (el) => {
        dispatch(removewish(el.id))
        setTotal((prev) => prev - el.price)
    }

    return (
        <div className='singleitem' key={el.id}>
            <img style={{ width: '60px' }} src={el.imageURL} alt={el.name} />
            <div>
                <h5>{el.name}</h5>
                <h5>Rs.{el.price}</h5>
            </div>
            <div>
                <button onClick={() => { setTotal(total - el.price); deccval(el); }}>-</button>
                <button>{val}</button>
                <button onClick={() => { setTotal(total + el.price); incval(el); }}>+</button>
            </div>
            <button onClick={() => deleteItem(el)}>Delete</button>
        </div>
    )
}

export default SingleItem