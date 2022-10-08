import React from 'react';
import '../css/user_dashboard.css';
import '../css/sidebar.css';


function UserDashboard() {
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
            <a href="#" className="nav-link">
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
  <section className="overlay" />
  <div id="main-version">
    <div id="version">USER INSTRUCTIONS</div>
    <div>
      <h1>Lorem IPSUM......</h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>
    </div>
  </div>
</>

  )
}

export default UserDashboard
