import React from 'react'
import '../css/sidebar.css';
import '../css/user_voting.css';

function UserElections() {
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
  <section className="overlay" />
  <div className="dashboard-cards">
    <div className="card-container">
      <div className="card">
        <div className="content">
          <h2>01</h2>
          <h3>Election</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            excepturi reiciendis facere, officiis ullam. Illum iusto,
            repellendus itaque corrupti suscipit at!
          </p>
          <a href="voting_candidates_user.html">Cast Your Vote</a>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <h2>02</h2>
          <h3>Election</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            excepturi reiciendis facere, officiis ullam. Illum iusto,
            repellendus itaque corrupti suscipit at!
          </p>
          <a href="voting_candidates_user.html">Cast Your Vote</a>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <h2>03</h2>
          <h3>Election</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            excepturi reiciendis facere, officiis ullam. Illum iusto,
            repellendus itaque corrupti suscipit at!
          </p>
          <a href="voting_candidates_user.html">Cast Your Vote</a>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default UserElections
