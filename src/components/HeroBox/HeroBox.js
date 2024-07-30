import React from 'react'
import image from '../../Image/shop.webp'

function HeroBox() {
  return (
    <section className="text-white-600 body-font mt-10 bg-customColor">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-5xl text-15xl mb-4 font-medium text-white">SNAPSHOP
     
      </h1>
      <p className="mb-8 leading-relaxed text-2xl text-yellow-500">Snapshop is an innovative platform that combines AR and AI to let users visualize products in their environment, receive personalized recommendations, and enjoy seamless, secure shopping.</p>
  
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src={image}/>
    </div>
  </div>
</section>
  )
}

export default HeroBox