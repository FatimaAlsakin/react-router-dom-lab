import { useParams } from "react-router"
import { useState, useEffect } from "react"
import axios from "axios"

function ProductDetails() {

    const [product , setProducts ] = useState(null)
    const {pID} = useParams()

    async function findProduct() {
        const response =  await axios.get(`${import.meta.env.VITE_API_URL}/products/${pID}`)
        setProducts(response.data)
        
    }

    useEffect(()=>{
        findProduct()
    })

  return (
    <>
        {product ?<>
        <h1>Product Details</h1>
        <h2>Product Name: {product.title}</h2>
        <p>Description: {product.description}</p>
        <p>Category: {product.category}</p>
        <p>Price: {product.price}</p>
        </>
        :<h2>Loding...</h2>} 

    </>
  )
}

export default ProductDetails