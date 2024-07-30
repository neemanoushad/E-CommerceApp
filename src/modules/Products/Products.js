import React,{useEffect,useState} from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import Category from '../../components/Category/Category'

function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {
      const fetchProduct = async () =>{
        const response= await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        console.log(data);
        setProducts(data)
      }
      fetchProduct()
    
    }, [])
    
  return (
    <div>
    <Category/>
    <div className="flex flex-col text-center w-full mt-20 bg-yellow-300 p-20">
        <h2 className="text-4xl text-black tracking-widest font-bold title-font mb-1">PRODUCTS</h2>
        <h1 className="sm:text-sm text-sm font-medium title-font text-gray-900">ALL PRODUCTS</h1>
      </div>
    {
        products.length > 0 ?
        <ProductCard products={products}/>
        :
        <div>Loading...</div>
    }
    <ProductCard/>
    </div>
  )
}

export default Products