
import Signup from './pages/Signup/Signup'; 
/*
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login/Login';

import Profile from './pages/Profile/Profile';
import Settings from './pages/Settings/Settings';
*/
import './App.css';

function App() {
  return (
    <div className='App'>
      <Login />
    </div>

    /*
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
    */
  );
}

export default App;