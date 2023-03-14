import React from 'react'
import { useParams } from 'react-router-dom'
const Hello = () => {
    const { word } = useParams();


    console.log(useParams())



    return (
        <div>The Word is : {word}</div>
    )
}

export default Hello