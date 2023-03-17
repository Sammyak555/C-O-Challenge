import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleProduct from '../Components/SingleProduct'
import "../PagesCSS/ProductsPage.css"

//https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json

const getData = (setData) => {
    return axios.get('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json')
    .then((res) => setData(res.data))
}

const ProductsPage = () => {
    const [data,setData] = useState([])

    useEffect(()=> {
        getData(setData)
    },[setData])
    console.log(data)
  return (
    <div className='Productpage'>
        <div className='searchbox'>
            <input type="text" name="" id="" placeholder='Search for products...'/>
            <button>search</button>
        </div>
        <div className='alldata'>
            <div>filter</div>
            <div>
                {
                    data.length>0&&
                    data.map((el) => {
                        return <div key={el.id}><SingleProduct {...el}/></div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default ProductsPage