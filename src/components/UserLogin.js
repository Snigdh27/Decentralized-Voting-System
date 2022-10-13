import React from 'react';
import '../css/login.css';
import '../css/user_login.css';
import shape from '../img/shape.png';
import logo from '../img/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Login from './Login';
import {Link} from "react-router-dom";
import LoginForm from './LoginForm';

function UserLogin() {
  return (
    <>
        <main>
  <div className="big-wrapper light">
    <img src={shape} alt="" className="shape" />
    <header>
      <div className="container">
        <div className="logo">
          <img
            src={logo}
            alt="Logo"
            style={{ borderRadius: "50%" }}
          />
          <h3>
            <a href="../cover_page.html">Online Voting Portal</a>
          </h3>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="#" />
            </li>
            <li>
              <a href="#" />
            </li>
            <li>
              <a href="#" />
            </li>
            <li>
              <a href="#" />
            </li>
          </ul>
        </div>
        <div className="overlay" />
        <div className="hamburger-menu">
          <div className="bar" />
        </div>
      </div>
    </header>
    <div className="showcase-area">
      <div className="container">
        <div className="left">
          <div className="big-title">
            <h1>User Login Portal</h1>
          </div>
          <p className="text">
            ''The vote is precious. It is the most powerful non-violent tool we
            have in a democratic society, and we must use it.''
          </p>
         
        </div>
        <div className="right person">
          <div className="login-wrap">
            <div className="login-html">
            <LoginForm title="User"/>
               {/* <p
                className="tab"
                style={{ color: "white", textAlign: "center" }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;USER LOGIN
              </p>
              <br />
              <br />
              <input
                id="tab-1"
                type="radio"
                name="tab"
                className="sign-in"
                defaultChecked=""
              />
              <label htmlFor="tab-1" className="tab">
                Sign In
              </label>
              <input id="tab-2" type="radio" name="tab" className="sign-up" />
              <label htmlFor="tab-2" className="tab">
                Sign Up
              </label>
              <div className="login-form">
                <div className="sign-in-htm">
                  <div className="group">
                    <label htmlFor="user" className="label">
                      Username
                    </label>
                    <input
                      id="user"
                      type="text"
                      className="input"
                      name="username"
                      autoComplete="off"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="pass" className="label">
                      Password
                    </label>
                    <input
                      id="pass"
                      type="password"
                      className="input"
                      data-type="password"
                      name=""
                      password=""
                    />
                  </div>
                  <div className="group">
                    <input
                      id="check"
                      type="checkbox"
                      className="check"
                      defaultChecked=""
                    />
                    <label htmlFor="check">
                      <span className="icon" /> Keep me Signed in
                    </label>
                  </div>
                  <div className="group">
                   <Link to="/user-portal/dashboard"> 
                  <Link to="/user/dashboard" className='button'><p>Sign In</p></Link>
                      <input
                        type="submit"
                        className="button"
                        defaultValue="Sign In"
                        
                      /> 
                    </Link>
                   </div>
                  <div className="g-signin">
                   <Login />
                 </div>
                  <div className="hr" />
                  <div className="foot-lnk">
                    <a href="#forgot">Forgot Password?</a>
                  </div>
                </div>
                <div className="sign-up-htm">
                  <div className="group">
                    <label htmlFor="user" className="label">
                      Username
                    </label>
                    <input id="user" type="text" className="input" />
                  </div>
                  <div className="group">
                    <label htmlFor="pass" className="label">
                      Password
                    </label>
                    <input
                      id="pass"
                      type="password"
                      className="input"
                      data-type="password"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="pass" className="label">
                      Confirm Password
                    </label>
                    <input
                      id="pass"
                      type="password"
                      className="input"
                      data-type="password"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="pass" className="label">
                      Email Address
                    </label>
                    <input id="pass" type="text" className="input" />
                  </div>
                  <div className="group">
                    <Link to="/user-portal/dashboard">
                      <input
                        type="submit"
                        className="button"
                        defaultValue="Sign Up"
                        value="Sign Up"
                      />
                    </Link>
                  </div>  */}
                {/* </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="bottom-area">
          <div className="container"></div>
        </div>
      </div>
    </div>
  </div>
</main>


    </>
  );
}

export default UserLogin;