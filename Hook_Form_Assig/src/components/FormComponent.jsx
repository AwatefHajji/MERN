import React, { useState } from 'react';

const FormComponent = (props) => {
  const [first_name, setFirst_name] = useState("")
  const [last_name, setLast_name] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm_password, setConfirmPassword] = useState("")

  const processForm = (e) => {
    e.preventDefault()
    e.target.reset()
  }


  return (
    <fieldset>
      <legend>Create user</legend>
      <form onSubmit={(e) => { processForm(e) }}>
        <div>
          <label>First name:</label>
          <input onChange={(e) => { setFirst_name(e.target.value) }} />
        </div>
        <div>
          <label>Last name:</label>
          <input onChange={(e) => { setLast_name(e.target.value) }} />
        </div>
        <div>
          <label>Email Address: </label>
          <input onChange={(e) => { setEmail(e.target.value) }} />
        </div>
        <div>
          <label>Password: </label>
          <input onChange={(e) => { setPassword(e.target.value) }} type="password"/>
          
        </div>
        <div>
          <label>Confirm Password: </label>
          <input onChange={(e) => { setConfirmPassword(e.target.value) }} type="password"/>
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