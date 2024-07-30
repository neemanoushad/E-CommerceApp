
import React from 'react'
import Header from './components/Header/Header'
import Home from './modules/Home/Home'
import Footer from './components/Footer/Footer'
import {Router,Routes,Route} from 'react-router-dom'
import Productt from './modules/Product/Productt'
import Products from './modules/Products/Products'
import CategoryProduct from './modules/CategoryProduct/CategoryProduct'
import Cart from './modules/Cart/Cart'
function App() {
  return (
    <div className='text-gray-600 text-4xl' >
      <Header/>
    
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product/:id' element={<Productt/>}></Route>
        <Route path='/product' element={<Products/>}></Route>
        <Route path='/category/:name' element={<CategoryProduct/>}></Route>
        <Route path='/E-CommerceApp' element={<Home/>}></Route>
        <Route path='cart' element={<Cart/>}></Route>
        <Route path='*' element={<div>404</div>}></Route>
    
      </Routes>
    
      <Footer/>

    </div>
  )
}

export default App