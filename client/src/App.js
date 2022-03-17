
import { useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Register';
import UserContext from './UserContext';




const App = () => {

  const [email,setEmail]=useState('')

  return (

    <UserContext.Provider value={{email,setEmail}}>
      <BrowserRouter>

      <div>

        {
        
          !!email && (
            <div className='bg-emerald-500 text-center text-red-50 text-sm py-1'> Login in as {email} </div>
          )

        }

        {
          !email && (
            <div className='bg-rose-500 text-center text-red-50 text-sm py-1'>Not Logged In</div>
          )
        }
      </div>
      <hr/>

      <nav className="bg-slate-200">
        <ul className="py-4 px-5 flex justify-center items-center gap-4">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>

      </BrowserRouter>

    </UserContext.Provider>
   

  )
}

export default App;