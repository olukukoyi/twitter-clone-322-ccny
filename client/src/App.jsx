import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Homepage from './pages/Homepage/Homepage';
import Profile from './pages/Profile/Profile';
import Payment from './pages/Payment/Payment';
import Settings from './pages/Settings/Settings';
import './App.css';

function App() {
    return (
        <BrowserRouter>
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/homepage" element={<Homepage />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/payment" element={<Payment />}></Route>
                <Route path="/settings" element={<Settings />}></Route>
            </Routes>
        </div>
        </BrowserRouter>
    
    );
}

export default App;