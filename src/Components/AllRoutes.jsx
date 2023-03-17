import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartPage from '../Pages/CartPage'
import ProductsPage from '../Pages/ProductsPage'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<ProductsPage />} />
            <Route path='/cart' element={<CartPage />} />
        </Routes>
    </div>
  )
}

export default AllRoutes