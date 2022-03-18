import axios from 'axios'
import { useContext, useState } from "react"
import UserContext from "./UserContext"

const Register=()=>{

  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')

  const user=useContext(UserContext)

   const registerUser=(e)=>{
      e.preventDefault()
      const data={email,password}
      axios.post('/register', data,{withCredentials:true}).then(response=>{
         user.setEmail(response.data.email)
         setEmail('')
         setPassword('')
      })

   }

   return (
      <form className="text-center" action="" onSubmit={(e) => registerUser(e)}>
        <h2 className="text-3xl py-7">Register</h2>
  
        <ul>
          <li className="mb-6">
            <input
              type="text"
              placeholder="Enter Your Email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </li>
          <li className="mb-8">
            <input
              type="password"
              placeholder="Enter Your Password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </li>
          <li>
            <button
              className="py-3 px-12 rounded-full bg-orange-500 text-base text-orange-50 hover:bg-orange-400"
              type="submit"
            >
              Register
            </button>
          </li>
        </ul>
      </form>
    );
 
 }
 
 export default Register