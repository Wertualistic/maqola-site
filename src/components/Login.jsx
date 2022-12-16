import React from "react";
import img from "../imgs/login.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="d-flex col-12">
      <div className="col-6">
        <img src={img} style={{ height: "100vh" }} />
      </div>
      <div className="col-6 d-flex flex-column justify-content-center align-items-center">
        <h2>Login to your account</h2>
        <form className="w-50 mt-5">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 form-check d-flex justify-content-between">
            <div className="check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Remember me
            </label>
            </div>
            <Link>Forgot password?</Link>
          </div>
          <button class="btn btn-success w-100">
            Submit
          </button>
          <button class="btn btn-dark w-100 mt-3">
           or sign-in with google
          </button>

          <span className="d-flex justify-content-center mt-5">Don't have an account? <Link to='/signup'> Join free today</Link></span>
        </form>
      </div>
    </div>
  );
}

export default Login;
