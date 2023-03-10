import React, { useState } from 'react';

const FormComponent = (props) => {
  const [first_name, setFirst_name] = useState("")
  const [last_name, setLast_name] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm_password, setConfirmPassword] = useState("")
  const [nameError, setNameError] = useState(false)
  const [lastnameError, setLastNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [confirmpasswordError, setConfirmPasswordError] = useState(false)

  const processForm = (e) => {
    e.preventDefault()
    e.target.reset()
  }
  const checFirstname = (e) =>{
    setFirst_name(e.target.value)
    if(e.target.value.length ===0){
      setNameError(false)
    }
    else if (e.target.value.length < 2){
        setNameError(true)
    }else{
        setNameError(false)
    }

} 
  const checLastname = (e) =>{
    setLast_name(e.target.value)
    if (e.target.value.length === 0){
      setLastNameError(false)
    }
    else if (e.target.value.length < 2){
        setLastNameError(true)
    }else{
        setLastNameError(false)
    }

  } 
  const checEmail = (e) =>{
    setEmail(e.target.value)
    if(e.target.value.length===0){
      setEmailError(false)
    }
    else if (e.target.value.length < 5){
        setEmailError(true)
    }else{
        setEmailError(false)
    }

  } 
  const checPassword = (e) =>{
    setPassword(e.target.value)
    if (e.target.value.length === 0) {
      setPasswordError(false);
    } else if (e.target.value.length < 8){
        setPasswordError(true)
    }else{
        setPasswordError(false)
    }

  }
  const checConfirmPassword = (e) =>{
    setConfirmPassword(e.target.value)
    if (e.target.value.length === 0) {
      setConfirmPasswordError(false);
    } else if (e.target.value !== password )
    { setConfirmPasswordError(true)
    }else{
        setConfirmPasswordError(false)
    }

  }
  return (
    <fieldset>
      <legend>Create user</legend>
      <form onSubmit={(e) => { processForm(e) }}>
        <div>
          <label>First name:</label>
          <input onChange={(e) => { checFirstname(e) }} />
          {nameError ? <p style={{color:"red"}}>First name must be at least 2 characters</p> : <p></p> }
        </div>
        <div>
          <label>Last name:</label>
          <input onChange={(e) => { checLastname(e) }} />
          {lastnameError ? <p style={{color:"red"}}>Last name must be at least 2 characters</p> : <p></p> }
        </div>
        <div>
          <label>Email Address: </label>
          <input onChange={(e) => { checEmail(e) }} />
          {emailError ? <p style={{color:"red"}}>Email must be at least 5 characters</p> : <p></p> }
        </div>
        <div>
          <label>Password: </label>
          <input onChange={(e) => { checPassword(e) }} type="password"/>
          {passwordError ? <p style={{color:"red"}}>Password must be at least 8 characters</p> : <p></p> }
          
        </div>
        <div>
          <label>Confirm Password: </label>
          <input onChange={(e) => { checConfirmPassword(e) }} type="password"/>
          {confirmpasswordError ? <p style={{color:"red"}}>Passwords must match</p> : <p></p> }
        </div>




      </form>
      <hr />
      <h1>your form data</h1>
      <div>
        <p>First name: {first_name}</p>
        <p>Last name: {last_name}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm password: {confirm_password}</p>

      </div>


    </fieldset>
  )
}

export default FormComponent;