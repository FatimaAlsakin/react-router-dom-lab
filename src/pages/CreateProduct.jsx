import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router'


function CreateProduct() {

    const [ formData, setFormData ] = useState({
        title:'',
        description:'',
        price:''
    })

    const navigate = useNavigate()

    function handleChange(event){
        setFormData({...formData,[event.target.title]:event.target.value})
    }

    async function handleSubmit(event){
        event.preventDefault()

        const response = await axios.post(`${import.meta.env.VITE_API_URL}/products`,formData)
    
        navigate('/products')
    }
  return (
    <div>
        <h1>Create Product</h1>

        <form onSubmit={handleSubmit}>

            <label htmlFor="title">Title:</label>
            <input 
            type="text" 
            value={formData.title}
            onChange={handleChange}
            title='title'
            id='title'
            />
            <br /><br />
            <label htmlFor="description">Description:</label>
            <input 
            type="text"
            value={formData.description}
            onChange={handleChange}
            title='description'
            id='description'
             />
            <br /><br />
            <label htmlFor="category">Category:</label>
            <input 
            type="text" 
            title='category'
            id='category'
            value={formData.category}
            onChange={handleChange}
            />
            <br /><br />
            <label htmlFor="price">Price:</label>
            <input 
            type="number" 
            title='price'
            id='price'
            value={formData.price}
            onChange={handleChange}
            />
            <br /><br />
            <label htmlFor="quantity">Quantity:</label>
            <input 
            type="number" 
            title='quantity'
            id='quantity'
            value={formData.quantity}
            onChange={handleChange}
            />
            <br /><br />
            <button>Create Product</button>
        </form>
    </div>
  )
}

export default CreateProduct