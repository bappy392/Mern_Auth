
import './App.css';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import Register from './Register';




function App() {
  return (

        <BrowserRouter>
       
        <div>
        <Link to='/'>Home</Link><span></span> <span></span>
        <Link to='/login' >Login</Link> <span></span> <span></span>
        <Link to='/register'>Register</Link>
        </div>

        <Routes>
           <Route path="/register" element={<Register/>} />
        </Routes>

            
      
        </BrowserRouter>

       
  );
}

export default App;
