import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import { useParams , useNavigate } from 'react-router-dom'

const EditAuthor = () => {
  const { id } = useParams()
  const [author, setAuthor] = useState({})
  const[errors,setErrors] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    axios.get('http://localhost:8000/api/authors/' + id)
      .then(res => {
        console.log(res);
        setAuthor(res.data)
      })
      .catch(err => {
        console.error(err)
      });
  }, [id, setAuthor]);

  const CancelEdit=() => {
    navigate("/")
}

  const submitHandler = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:8000/api/authors/${id}`, author)
      .then(res => {
        setAuthor(res.data)
        navigate('/')

      })
      .catch(err => {
        console.error(err)
        const errorArr = []
        for (const key of Object.keys(err.response.data)) {
          errorArr.push(err.response.data[key].message)
        }
        console.log("==============", errorArr)
        setErrors(errorArr)
      });

  }
  return (
    <div className='container '>
      <div> <Link to={`/`}>Home</Link></div>
      <h3 style={{color: "#9545FF"}}>Edit author:</h3>
      <div className="card">
      <div class="card-body">
      <form onSubmit={submitHandler} >
        <div className="form-group" style={{marginBottom: "20px"}}>
          <label>Name</label>
          <input type="text" className="form-control" onChange={(e) => { setAuthor({ ...author,   Name: e.target.value })} }value={author.Name} />
          <div >{errors.map(err => <p className='text-danger'>{err}</p>)}</div>
        </div>
        
        <div>
        <button type="submit" className="btn btn-primary">Submit</button>&nbsp; &nbsp; &nbsp;
        <button type="submit" className="btn btn-primary" onClick={CancelEdit}>Cancel</button>
        </div>
      </form>
      </div>
      </div>

    </div>
  )
}
export default EditAuthor