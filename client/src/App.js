
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Register';




const App = () => {

  return (

    <BrowserRouter>

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

  )
}

export default App;