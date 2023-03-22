
import React,{useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {Link} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/authors")
        .then(res => {
            console.log("Server Response ",res.data)
            setAuthors(res.data)
          })
        .catch(err => {
              console.log(err)
          })
    },[])
    const deleteAuthor=(id) =>{
        axios.delete(`http://127.0.0.1:8000/api/authors/${id}`)
        .then(res=>{
                console.log("Author deleted ✅✅",res.data)
                setAuthors(authors.filter((author)=>author._id!==id))
        })
        .catch(err=>console.log(err))
    }


  return (
    <div className="container">
        <div> <Link to ={`/new`}>Add an Author</Link></div>
        <h3 style={{color: "#9545FF"}}>We have quotes by:</h3>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Action available</th>
                </tr>
            </thead>
            <tbody>
                { authors ? authors.map(author =><tr key={author._id}>
                    <td><p style={{color: "#9545FF"}}>{author.Name}</p></td>
                    <td><button onClick ={()=>navigate(`/edit/${author._id}`)} className='btn btn-warning'>Edit </button> &nbsp; &nbsp; &nbsp;
            <button onClick = {()=>{deleteAuthor(author._id)}} className='btn btn-danger'>Delete </button></td>
                </tr>):"Loading......"}
                
                
            </tbody>
        </table>

        





    </div>
  )
}

export default Home