
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
            <div> Login in as {email} </div>
          )

        }

        {
          !email && (
            <div>Not Logged In</div>
          )
        }
      </div>
      <hr/>

      <nav className="manu-link">
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/login' >Login</NavLink></li>
          <li><NavLink to='/register'>Register</NavLink></li>
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