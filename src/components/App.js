import React, { useState, useEffect, useRef } from 'react'
import '../styles/App.css';
const App = () => {

  //code here 
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const inputEmailRef = useRef(null)
  const inputPasswordRef = useRef(null)
  const [userDetails, setUserDetails] = useState({ email: '', password: '' })
  function handleSubmit() {
    if (inputEmailRef.current.value == '') {
      inputEmailRef.current.focus()
    }
    else if (inputPasswordRef.current.value == '') {
      inputPasswordRef.current.focus()
    }
    else {
      setUserDetails({
        email: inputEmailRef.current.value,
        password: inputPasswordRef.current.value
      })
    }

  }
  return (
    <div id="main">
      Email
      <input id="inputEmail" type="text" defaultValue={userDetails.email} ref={inputEmailRef} /><br />
      Password
      <input id="inputPassword" type="text" defaultValue={userDetails.password} ref={inputPasswordRef} /><br />
      <button id="submitButton" onClick={handleSubmit}>Submit</button><br />
      <p id="emailText">Your Email : {userDetails.email}</p>
      <p id="passwordText">Your Password : {userDetails.password}</p>

    </div>
  )
}


export default App;
