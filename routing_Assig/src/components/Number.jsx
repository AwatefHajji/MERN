
import React from 'react'
import { useParams } from 'react-router-dom'
const Number = () => {
    const { numb } = useParams();
    const { bcolor } = useParams();
    const { color } = useParams();


    console.log(useParams())

if (isNaN(numb)){
    return <div style ={{backgroundColor : bcolor , color:color}}>The Word is : {numb}</div>
}

    return (
        
        <div>The Number is {numb}</div>
    )
}

export default Number