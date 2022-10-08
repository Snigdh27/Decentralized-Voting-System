import React from 'react'
import '../css/sidebar.css';
import '../css/user_register.css';

function UserRegisterForm() {
  return (
    <>
  <nav>
    <div className="logo">
      <i className="bx bx-menu menu-icon" />
      <span className="logo-name">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Online
        Voting Portal (User Portal)
      </span>
    </div>
    {/* <div class="side_img">
  <div style="text-align: left"></div><img src="img/side_image.jpg"alt="" srcset=""></div>
</div> */}
    <div className="sidebar">
      <div className="logo">
        <i className="bx bx-menu menu-icon" />
        <span className="logo-name">User Portal</span>
      </div>
      {/*<div class="user_avatar">
      <img src="/img/avatar.png" alt="" srcset="" style="width:79px;    margin: 38px 79px;">
  </div>*/}
      <div className="sidebar-content">
        <ul className="lists">
          <li className="list">
            <a href="user_portal.html" className="nav-link">
              <i className="bx bx-home-alt icon" />
              <span className="link">Dashboard</span>
            </a>
          </li>
          <li className="list">
            <a href="user_register_form.html" className="nav-link">
              <i className="bx bxs-message-rounded-add icon" />
              <span className="link">Register For Vote</span>
            </a>
          </li>
          <li className="list">
            <a href="user_voting.html" className="nav-link">
              <i className="bx bxs-upvote icon" />
              <span className="link">Cast Your Vote</span>
            </a>
          </li>
          <li className="list">
            <a href="winning_prediction.html" className="nav-link">
              <i className="bx bx-analyse icon" />
              <span className="link">Winning Prediction</span>
            </a>
          </li>
          <li className="list">
            <a href="results.html" className="nav-link">
              <i className="bx bxl-tailwind-css icon" />
              <span className="link">Final Results</span>
            </a>
          </li>
        </ul>
        <div className="bottom-cotent">
          <li className="list">
            <a href="../cover_page.html" className="nav-link">
              <i className="bx bx-log-out icon" />
              <span className="link">Logout</span>
            </a>
          </li>
        </div>
      </div>
    </div>
  </nav>
  <div className="container-registration">
    <div className="title">Voter Registration Form</div>
    <div className="content">
      <form action="#">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Full Name</span>
            <input type="text" placeholder="Enter your name" required="" />
          </div>
          <div className="input-box">
            <span className="details">Aadhar Number</span>
            <input type="text" placeholder="Enter your username" required="" />
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="text" placeholder="Enter your email" required="" />
          </div>
          <div className="input-box">
            <span className="details">Phone Number</span>
            <input type="text" placeholder="Enter your number" required="" />
          </div>
          <div className="input-box">
            <span className="details">Date of Birth</span>
            <input type="date" placeholder="Enter your password" required="" />
          </div>
          <div className="input-box">
            <span className="details">Voter Id</span>
            <input
              type="text"
              placeholder="Confirm your password"
              required=""
            />
          </div>
        </div>
        <div className="gender-details">
          <input type="radio" name="gender" id="dot-1" />
          <input type="radio" name="gender" id="dot-2" />
          <input type="radio" name="gender" id="dot-3" />
          <span className="gender-title">Gender</span>
          <div className="category">
            <label htmlFor="dot-1">
              <span className="dot one" />
              <span className="gender">Male</span>
            </label>
            <label htmlFor="dot-2">
              <span className="dot two" />
              <span className="gender">Female</span>
            </label>
            <label htmlFor="dot-3">
              <span className="dot three" />
              <span className="gender">Prefer not to say</span>
            </label>
          </div>
        </div>
        <div className="button">
          <input type="submit" defaultValue="Register" value="Register" />
        </div>
      </form>
    </div>
  </div>
  <section className="overlay" />
</>

  )
}

export default UserRegisterForm
