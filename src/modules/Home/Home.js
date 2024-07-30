import React, { useEffect,useState } from 'react'
import HeroBox from '../../components/HeroBox/HeroBox'
import Product from '../../components/ProductCard/ProductCard'
import Feature from '../../components/FeatureCard/Feature'
import Static from '../../components/StaticCard/Static'
import Footer from '../../components/Footer/Footer'
import ProductCard from '../../components/ProductCard/ProductCard'
import Category from '../../components/Category/Category'

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProduct = async () =>{
      const response= await fetch('https://fakestoreapi.com/products?limit=12')
      const data = await response.json()
      console.log(data);
      setProducts(data)
    }
    fetchProduct()
  
  }, [])
  
  return (
    <>
    <HeroBox/>
    <Category/>
    <div className="flex flex-col text-center w-full mt-50 p-20 bg-customColor2">
        <h2 className="text-4xl text-black tracking-widest font-bold title-font mb-1">PRODUCTS</h2>
        <h1 className="sm:text-xs text-2xl font-medium title-font text-gray-900">Explore The Latest Collections</h1>
      </div>
      {
        products.length > 0 ?
        <ProductCard products={products}/>
        :
        <div>Loading...</div>
      }
    <Product/>
 
    <Static/>
   
    </>
  )
}

export default Home