import React from 'react';
import '../css/cover_page.css';
import shape from '../img/shape.png';
import logo from '../img/logo.jpg';
import person from '../img/person.jpg';

function CoverPage() {
  return (
    <div>
      <main>
  <div className="big-wrapper light">
    <img src={shape} alt="" className="shape" />
    <header>
      <div className="container">
        <div className="logo" style={{ textDecoration: "none" }}>
          <img
            src={logo}
            alt="Logo"
            style={{ borderRadius: "50%" }}
          />
          <h3>
            <a href="cover_page.html">Online Voting Portal</a>
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
            <h1>Future is here,</h1>
            <h1>Vote using Blockchain</h1>
          </div>
          <p className="text">
            Enjoy the most secured,transparent,efficient and immutable voting
            system decentralized using the Ethereum Framework.
          </p>
          <div className="cta">
            <a href="/admin/login_page_admin.html" className="btn">
              Admin Login
            </a>&nbsp;
            <a href="/user/login_page_user.html" className="btn">
              User Login
            </a>
          </div>
        </div>
        <div className="right">
          <img src={person} alt="Person Image" className="person" />
        </div>
      </div>
    </div>
    <div className="bottom-area">
      <div className="container"></div>
    </div>
  </div>
</main>

    </div>
  )
}

export default CoverPage
