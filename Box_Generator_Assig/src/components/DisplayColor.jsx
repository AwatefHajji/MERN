import React from 'react'
import '../index.css';
const DisplayColor = (props) => {
    
  return (
    <fieldset>
        <legend>DisplayColor</legend>
        <div style ={{display:'flex', flexWrap: 'wrap'}}>
    {props.colors.map((onecolor, index) =>{return (<div className='box' style={{backgroundColor:onecolor.color}} key={index}></div>)})}
    {console.log(props.colors)}
    </div>
    </fieldset>
  )
}

export default DisplayColor