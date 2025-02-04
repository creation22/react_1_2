import UserContext from '../context/UserContext'
import React, { useContext, useState } from 'react'



function Login() {
    const [username,setusername] = useState('')
    const [password , setpassword] =useState('')

    const {setuser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setuser({username , password})
    }

  return (
    <div>
      <h2>Login</h2>
      <label>Username </label>
      <input type ='text' value = {username} onChange={(e) => setusername(e.target.value)}
      placeholder='username' />
      <br /><br />
      <label>Password : </label>
      <input type ='text' value = {password} onChange={(e) => setpassword(e.target.value)}
      placeholder='password' />
      <br /><br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
