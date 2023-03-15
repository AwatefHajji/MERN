import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'
const Search = () => {
    const [choose, setChoose] = useState('')
    const [id, setId] = useState('')

    const Navigate = useNavigate()
    const processForm = (e) => {
        e.preventDefault();
        Navigate("/" + choose + "/" + id)
    }


    return (
        <div>
            <form onSubmit={processForm}>
                <label>Search for :</label>
                <select onChange={(e) => { setChoose(e.target.value) }} value={choose} >
                    <option ></option>
                    <option >people</option>
                    <option >planets</option>
                </select>
                <label >ID:</label>
                <input type="text" onChange={(e) => { setId(e.target.value) }} value={id} />
                <button >Search</button>
            </form>

        </div>


    )
}

export default Search