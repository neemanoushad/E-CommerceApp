import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../Image/s.jpg'
const Header = () => {
  const navList=[
    {
      path:'/',
      name:'Home'

    },
    {
      path:'/product',
      name:'Product'

    },
    
   
  ]
  return (
    <header className="text-gray-600 body-font shadow-lg">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link to={'/'} className="flex  cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src={image} alt="Logo" className="w-15 h-10 p-0 bg-yellow-500 rounded-full" />

        <span className="ml-3 text-xl">SnapShop</span>
      </Link>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        {
          navList.map((item)=>{
            return(
              <Link to={item.path} className="mr-5 hover:text-gray-900">{item.name}</Link>
            )
          })
        }
      
      </nav>
      <Link to={'/cart'} className="inline-flex text-white items-center bg-yellow-700 border-0 py-2 px-4 focus:outline-none hover:bg-gray-500 rounded text-base mt-4 md:mt-0">Go to Cart
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </Link>
    </div>
  </header>
  )
}

export default Header
