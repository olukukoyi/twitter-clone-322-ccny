import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import Vlogo from "../../images/vlogo.png";
import { login } from "../../../utils/authFunctions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      login(email, password);

      setSuccess(true);
    } catch (error) {
      console.log(error);
    }

    if (success) {
      navigate("/bobo");
    }
  };

  return (
    <div className="login">
      <div className="login-left">
        <img className="login-left-logo" src={Vlogo} alt="vlogo" />
      </div>
      <div className="login-right">
        <h1 className="login-right-title">Happening now</h1>
        <h2 className="login-right-subtitle">Join today.</h2>
        <form>
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
          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
            type="submit"
            className="login-button"
          >
            Login
          </button>

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
