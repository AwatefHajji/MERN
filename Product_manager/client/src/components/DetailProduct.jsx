import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import './Product.css';
const DetailProduct = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {console.log(res);
                setProduct(res.data)})
            .catch(err => console.error(err));
    }, [id, setProduct]);
  return (
    <div className='products'>
      
<p>Product title : {product.title}</p>
<p>Price : ${product.price}</p>
<p>Description : {product.description}</p>


    </div>
  )
}

export default DetailProduct