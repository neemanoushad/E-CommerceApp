import React,{useEffect,useState} from 'react'
import Feature from '../FeatureCard/Feature'

function Category() {
    const [Category, setCategory] = useState([])
    useEffect(() => {
        const fetchCategory = async () =>{
          const response= await fetch('https://fakestoreapi.com/products/categories')
          const data = await response.json()
          console.log(data);
          setCategory(data)
        }
        fetchCategory()
      
      }, [])

      if(Category.length === 0) return <div>Loading..</div>
    
  return (
   
    <Feature cards={Category}/>

    
  )
}

export default Category