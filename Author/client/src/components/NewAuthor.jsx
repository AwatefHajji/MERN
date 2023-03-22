import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
const NewAuthor = () => {
    const [name, setName] = useState("")
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()

        axios.post("http://127.0.0.1:8000/api/authors", {
            Name: name
        })
            .then(res => {
                console.log(res.data)
                setName("")
            })
            .catch((err) => {
                console.log(err)
                console.log(err.response.data)

                const errorArr = []
                for (const key of Object.keys(err.response.data)) {
                    errorArr.push(err.response.data[key].message)
                }
                console.log("==============", errorArr)
                setErrors(errorArr)
            })

    }
    const CancelAdd = () => {
        navigate("/")
    }



    return (
        <div className='container'>
            <div> <Link to={`/`}>Home</Link></div>
            <h3 style={{ color: "#9545FF" }}>Add new author:</h3>
            <div className="card">
                <div class="card-body">
                    <form onSubmit={submitHandler} >
                        <div className="form-group" style={{ marginBottom: "20px" }}>
                            <label>Name</label>
                            <input type="text" className="form-control cl-3" onChange={(e) => { setName(e.target.value) }} value={name} />
                            <div>{errors.map(err => <p className='text-danger'>{err}</p>)}</div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>&nbsp; &nbsp; &nbsp;
                        <button type="submit" className="btn btn-primary" onClick={CancelAdd}>Cancel</button>
                    </form></div>
            </div>

        </div>
    )
}

export default NewAuthor