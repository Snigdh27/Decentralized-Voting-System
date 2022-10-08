import React from 'react'
import '../css/sidebar.css';
import '../css/voting.css';

function UserVoting() {
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
  <section className="profile-cards">
    <div className="profile-card-1">
      <div className="img">
        <img src="https://i.pinimg.com/550x/4d/72/97/4d7297dad94265c0acbc3b677d418935.jpg" />
      </div>
      <a className="view-more" href="">
        <i className="fa fa-plus-circle" aria-hidden="true" />
        <div className="popup" />
      </a>
      <div className="mid-section">
        <div className="name">LOREM IPSUM</div>
        <div className="description">
          Lorem ipsum dolor sit<a href="https://facebook.com">Lorem</a>
        </div>
        <div className="line" />
        <div className="stats">
          <div className="stat">
            81.3M
            <div className="subtext">Followers</div>
          </div>
          <div className="stat">
            822k
            <div className="subtext">Likes</div>
          </div>
          <div className="stat">
            750k
            <div className="subtext">Shares</div>
          </div>
        </div>
      </div>
    </div>
    <div className="profile-card-2">
      <div className="img">
        <img src="https://i.pinimg.com/550x/4d/72/97/4d7297dad94265c0acbc3b677d418935.jpg" />
      </div>
      <a className="view-more" href="">
        <i className="fa fa-plus-circle" aria-hidden="true" />
        <div className="popup" />
      </a>
      <div className="mid-section">
        <div className="name">LOREM IPSUM</div>
        <div className="description">
          Lorem ipsum dolor sit<a href="https://facebook.com">Lorem</a>
        </div>
        <div className="line" />
        <div className="stats">
          <div className="stat">
            81.3M
            <div className="subtext">Followers</div>
          </div>
          <div className="stat">
            822k
            <div className="subtext">Likes</div>
          </div>
          <div className="stat">
            750k
            <div className="subtext">Shares</div>
          </div>
        </div>
      </div>
    </div>
    <div className="profile-card-2 profile-card-3">
      <div className="img">
        <img src="https://i.pinimg.com/550x/4d/72/97/4d7297dad94265c0acbc3b677d418935.jpg" />
      </div>
      <a className="view-more" href="">
        <i className="fa fa-plus-circle" aria-hidden="true" />
        <div className="popup" />
      </a>
      <div className="mid-section">
        <div className="name">LOREM IPSUM</div>
        <div className="description">
          Lorem ipsum dolor sit<a href="https://facebook.com">Lorem</a>
        </div>
        <div className="line" />
        <div className="stats">
          <div className="stat">
            81.3M
            <div className="subtext">Followers</div>
          </div>
          <div className="stat">
            822k
            <div className="subtext">Likes</div>
          </div>
          <div className="stat">
            750k
            <div className="subtext">Shares</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default UserVoting
