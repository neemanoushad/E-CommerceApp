import React from 'react'
import { Link } from 'react-router-dom'

const Feature=({cards =[1,2,3]}) =>{
  return (
    <section className="text-gray-600 body-font bg-customColor ">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-xxl text-yellow-600 tracking-widest font-medium title-font mb-1">CATEGORIES</h2>
      
      </div>
      <div className="flex flex-wrap -m-4">  
        {
          cards.map((item)=>{
            return(
              <Link to={`/category/${item}`} className="p-4 md:w-1/3 cursor-pointer hover:bg-gray-100 transition-transform duration-300 hover:shadow-lg">
          <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-black text-xxl title-font font-bold capitalize text-center">{item || 'Example card'}</h2>
            </div>
            <div className="flex-grow">
             
              <a className="mt-3 text-indigo-500 inline-flex items-center text-xs">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </Link>

            )
          })
        }
        

      </div>
    </div>
  </section>
  )
}

export default Feature