import { useState } from "react"
import axios from 'axios'

const Register=()=>{

  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')

   const registerUser=(e)=>{
      e.preventDefault()
      
      const data={email,password}
      axios.post('', data)

   }

    return(
       <form action="" onSubmit={e=>registerUser(e)}>
            <h2>Register</h2>
            
            <input type='email' placeholder="Enter Your Email" required onChange={event=>setEmail(event.target.value)} value={email}/>
            <input type='password' placeholder="Enter Your Password" required onChange={event=>setPassword(event.target.value)} value={password}/>

            <button type="submit">Register</button>
       </form> 
 
    )
 
 }
 
 export default Register