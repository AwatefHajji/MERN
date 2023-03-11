import React, { useState } from 'react'


const ColorForm = (props) => {
    const [color,setColor]=useState("#ffffff")

    const submitInputs = (e) =>{
        e.preventDefault()
        setColor("#ffffff")
        const newColor={color}
        props.setColorsFunction([...props.colors, newColor])
        
        }
  return (
    <fieldset>
        <legend>ColorForm</legend>
        <form onSubmit={(e)=>{submitInputs(e)}}>
            <label >Color</label>
            <input type="color" onChange={(e) =>{setColor(e.target.value)}} value ={color}/>
            <button>Add</button>
        </form>
    {console.log(color)}

    </fieldset>
  )
}

export default ColorForm