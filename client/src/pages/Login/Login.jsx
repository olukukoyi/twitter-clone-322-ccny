import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Vlogo from "../../images/vlogo.png";



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }

    return (
        <div className="login">
            <div className="login-left">
                <img className="login-left-logo" src={Vlogo} alt="vlogo" />
            </div>
            <div className="login-right">
                <h1 className="login-right-title">Happening now</h1>
                <h2 className="login-right-subtitle">Join today.</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-input"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="password"
                            className="form-input"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                
                    <p>Don't have an account? Sign Up </p>
                </form>
            </div>
            <div className="footer">
                <p>&copy; 2023 Team V</p>
            </div>
        </div>
    );
};

export default Login;