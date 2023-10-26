import React, { useState } from "react";
import { baseUrl } from "./utils/baseUrl";
// import axios from "axios";
import { axios } from "./utils/axios";
const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log("logging in");
    try {
      // Create an API request to authenticate the user
      // const response = await axiosIns.post(`/api/addUser`);
      const response = await axios.post(`/api/loginUser`, {
        email: email,
        password: password,
      });

      // Login was successful (handle this based on the response from your server)
      if (response.data.success) {
        console.log("login successfully...");
        onLogin(); // Call the onLogin function to set the user as authenticated
      } else {
        console.error("Login failed:", response.data); // Handle login failure
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const cardStyle = {
    borderRadius: "1rem",
    backgroundColor: "#203c38 !important",
  };

  const formGroupStyle = {
    marginBottom: "20px", // Increase the margin to separate form fields
  };

  const formFieldBorderStyle = {
    border: "1px solid lightgray",
    borderRadius: "5px",
    padding: "8px",
  };

  const buttonStyle = {
    outline: "light",
    borderWidth: "2px",
    borderRadius: "10px",
    padding: "0.5rem 2rem",
    fontSize: "1.25rem",
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={cardStyle}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">
                    Please enter your login and password!
                  </p>

                  <div
                    className="form-outline form-white"
                    style={formGroupStyle}
                  >
                    <input
                      type="email"
                      id="typeEmailX"
                      className="form-control form-control-lg"
                      style={formFieldBorderStyle} // Apply form field styles
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="form-label" htmlFor="typeEmailX">
                      Email
                    </label>
                  </div>

                  <div
                    className="form-outline form-white"
                    style={formGroupStyle}
                  >
                    <input
                      type="password"
                      id="typePasswordX"
                      className="form-control form-control-lg"
                      style={formFieldBorderStyle}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label className="form-label" htmlFor="typePasswordX">
                      Password
                    </label>
                  </div>

                  <p className="small mb-5 pb-lg-2">
                    <a className="text-white-50" href="#!">
                      Forgot password?
                    </a>
                  </p>

                  <button
                    className="btn btn-outline-light btn-lg px-5"
                    style={buttonStyle}
                    // type="submit"
                    onClick={handleLogin}
                  >
                    Login
                  </button>

                  <div className="d-flex justify-content-center text-center mt-4 pt-1">
                    <a href="#!" className="text-white">
                      <i className="fab fa-facebook-f fa-lg"></i>
                    </a>
                    <a href="#!" className="text-white">
                      <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                    </a>
                    <a href="#!" className="text-white">
                      <i className="fab fa-google fa-lg"></i>
                    </a>
                  </div>
                </div>

                <div>
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <a href="#!" className="text-white-50 fw-bold">
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
