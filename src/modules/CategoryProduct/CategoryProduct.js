import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

import ProductCard from '../../components/ProductCard/ProductCard'

function CategoryProduct() {
    const{name } =useParams()
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProduct = async () =>{
          const response= await fetch(`https://fakestoreapi.com/products/category/${name}`)
          const data = await response.json()
          console.log(data);
          setProducts(data)
        }
        fetchProduct()
      
      }, [])
      if (products.length === 0) return <div>Loading...</div>
  return (
    <ProductCard products={products}/>

  )
}

export default CategoryProduct