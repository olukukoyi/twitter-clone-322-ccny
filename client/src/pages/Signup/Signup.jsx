import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import Vlogo from "../../images/vlogo.png";

const Signup = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [selectedUserType, setSelectedUserType] = useState("");

  const addNewUser = async (e) => {
    e.preventDefault();

    const form = { firstName, lastName, name: username, password, email };

    const res = await fetch("http://localhost:8001/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // You might need additional headers (e.g., authentication tokens) based on the API requirements
      },
      credentials: "include",
      body: JSON.stringify(form),
    });
    // const data = await res.json();
  };

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
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-input"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-input"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-input"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-input"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            onClick={(e) => {
              addNewUser(e);
            }}
            type="submit"
            className="signup-button"
          >
            Sign Up
          </button>

          <p>
            Already have an account?{" "}
            <Link to="/login">Log In</Link>
          </p>
        </form>
      </div>
      <div className="footer">
        <p>&copy; 2023 Team V</p>
      </div>
    </div>
  );
};
export default Signup;
