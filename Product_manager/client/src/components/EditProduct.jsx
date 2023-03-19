import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './Product.css';

const EditProduct = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                console.log(res);
                setProduct(res.data)
            })
            .catch(err => {
                console.error(err)
            });
    }, [id, setProduct]);

    const handelsubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/${id}`, product)
            .then(res => {
                setProduct(res.data)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <div className='main'>

                <div className="form">
                    <h1>Edit Product</h1>
                    <form onSubmit={handelsubmit}>
                        <label>Title</label>
                        <input type="text" value={product.title} onChange={e => setProduct({ ...product, title: e.target.value })} />
                        <label>Price</label>
                        <input type="text" value={product.price} onChange={e => setProduct({ ...product, price: e.target.value })} />
                        <label>Description</label>
                        <input type="text" value={product.description} onChange={e => setProduct({ ...product, description: e.target.value })} />
                        <input type="submit" value="Update" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditProduct