import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import Vlogo from "../../images/vlogo.png";



const Signup = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [selectedUserType, setSelectedUserType] = useState('');

    const addNewUser = (e) => {
        e.preventDefault();
        console.log(selectedUserType);
    
    }
  
    return (
        <div className="signup">
            <div className="signup-left">
                <img className="signup-left-logo" src={Vlogo} alt="vlogo" />
            </div>
            <div className="signup-right">
                <h1 className="signup-right-title">Happening now</h1>
                <h2 className="signup-right-subtitle">Join today.</h2>
                <form onSubmit={addNewUser} className="signup-form">
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-input"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-input"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-input"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
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
                    <button type="submit" className="signup-button">Sign Up</button>

                    <p>Already have an account? Log In </p>
                </form>
            </div>
        </div>
    );
  };
export default Signup;