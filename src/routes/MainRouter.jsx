import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Product from '../page/Product'
import ProductDetail from '../components/ProductDetail'
import CustomPC from '../page/CustomPC'


const MainRouter = () => {
  return (
    <>
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path='/' element={<Product/>} />
                <Route path='/customPC' element={<CustomPC/>} />
                <Route />
                <Route />
                <Route path="/productdetail/:id" element={<ProductDetail/>}/>
            </Route>
            <Route path='*' element={"Not found"}/>
        </Routes> 
    </>
  )
}

export default MainRouter
