import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";



function App() {

    const { user } = useContext(AuthContext)


  
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/profile/:username' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    )
}

export default App;
