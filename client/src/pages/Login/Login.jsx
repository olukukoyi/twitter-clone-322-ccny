import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import Vlogo from "../../images/vlogo.png";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (res.status === 200) {
      navigate('/homepage');
      console.log(data);
      Cookies.set("token", data.token);
      Cookies.set("userid", data.user.id);
      console.log("Cookies after login:", Cookies.get('token'), Cookies.get('userid'));
    } else {
      console.error('Login failed:', data.message);
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

            <p>
              Don't have an account?{" "}
              <Link to="/signup">Sign up</Link>
            </p>
          </form>
        </div>
        <div className="footer">
          <p>&copy; 2023 Team V</p>
        </div>
      </div>
  );
};

export default Login;