import { useState } from 'react';
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import Signup from "./pages/Singup/Signup";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Settings/Settings";

import './App.css';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div classname = "app">
      <Routes>
        <Route path = "/" element = {<Homepage/>}></Route>
        <Route path = "/login" element = {<Login/>}></Route>
        <Route path = "/signup" element = {<Signup/>}></Route>
        <Route path = "/profile" element = {<Profile/>}></Route>
        <Route path = "/settings" element = {<Settings/>}></Route>

      </Routes>
    </div>
  );
};

export default App
