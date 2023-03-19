import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Product.css';
import {Link} from "react-router-dom";
const ProductComponent = () => {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [products, setProducts] = useState([])
  const [error, setError] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    const newProduct = {
      title: title,
      price: price,
      description: description
    }
    console.log(newProduct);
    // take the product and send it to the server how will send to database
    axios.post("http://localhost:8000/api/products/new", newProduct)
      .then((res) => {
        console.log(res, "success product created")
        console.log(newProduct)
      })
      .catch((err) => {
        console.log(err)
        setError(err.data.errors.description)
        console.log(error)

      })
    setTitle("")
    setPrice("")
    setDescription("")
  }

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then(res => {
        console.log(res.data)
        setProducts(res.data)
      })
      .catch(err => console.log(err))
  }, [])




  return (
    <div className='main'>

      <div className="form">

        <form onSubmit={submitHandler}>
          <label >Title:</label>
          <input type="text" placeholder="Title" onChange={(e) => { setTitle(e.target.value) }} />
          <label >Price :</label>
          <input type="text" placeholder="Price" onChange={(e) => { setPrice(e.target.value) }} />
          <label >Description:</label>
          <input type="text" placeholder="Description" onChange={(e) => { setDescription(e.target.value) }} />
          <p style={{ color: "red" }}>{error}</p>
          <input type="submit" value="Create" />

        </form>
      </div>
      <hr />
      <div className="products">
        <h1>All Products</h1>
        {/* {JSON.stringify(products)} */}
        {products.map((product) => (
          <div key={product._id}>
            <Link to={`/product/${product._id}`}>{product.title}</Link>
          </div>
        ))}

      </div>
    </div>


  )
}

export default ProductComponent