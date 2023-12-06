import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Homepage from './pages/Homepage/Homepage';
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
            </Routes>
        </div>
        </BrowserRouter>
    
    );
}

export default App;