import React from "react";
import "./Signup.css";


const Signup = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [selectedUserType, setSelectedUserType] = useState('');
  
    return (
      <div className="signup">
        <div className="signup-logo">
          
        </div>
        <div className="signup-form">
            <h1>Happening Now</h1>
            <h2 className="form-subtitle">Join today.</h2>

          <form onSubmit={addNewUser} className="signup-form">
            <input
              type="text"
              className="form-input"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              className="form-input"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              className="form-input"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            
            <input
              type="email"
              className="form-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
  
            <input
              type="password"
              className="form-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
            
            <button type="submit" className="signup-button">Sign Up</button>
          </form>
        </div>
      </div>
    );
  };
export default Signup;