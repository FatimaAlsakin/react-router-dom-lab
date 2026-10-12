import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'

function ProductsList() {

  const [products , setProducts ] = useState([])

  async function getAllProducts() {
    const response = await axios.get(import.meta.env.VITE_API_URL + '/products')
    setProducts(response.data)
    
  }

    useEffect(()=>{
        getAllProducts()
    },[])
  return (
    <>

    <h1>All Products</h1>

    {products.map((oneProduct)=><div key={oneProduct._id}>
      <h3>Product Name: {oneProduct.title}</h3>
      <Link to={`/products/${oneProduct._id}`}>Product Details</Link>
    </div>)}
    
    </>
  )
}

export default ProductsList